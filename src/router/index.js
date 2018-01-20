import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import { getCookie } from '@/Utils/utils'
import jwt from 'jsonwebtoken'
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    if(to.name === 'Per') {
        jwt.verify(getCookie('token'),'1508B_717', (errs, decoded) => {
            if (errs) {
                console.log('error')
                next('/home/user/login')
            } else {
                console.log(decoded)
                next()
            }
        })
    }
    console.log(to.name)
    next();
})

export default router