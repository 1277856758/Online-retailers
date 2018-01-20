import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import rem from './common/js/rem.js'
import './common/css/rest.css'
import './common/css/app.scss'
import './common/fonts(1)/iconfont.css'
import './common/font/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from '@/http/axios'
import VueLazyLoad from 'vue-lazyload'
import imessage from '@/components/Plug-in/Imessage'
import load from '@/components/Plug-in/Loading'
import store from './store/store'
import VueBus from 'vue-bus'
Vue.use(VueBus)
Vue.use(VueLazyLoad,{
    loading:'src/static/loading.gif'
})
Vue.use(VueAwesomeSwiper)
rem(document, window)
Vue.use(ElementUI)
fetch('src/api/banner.json').then(res=>{
  return res.json()
})
.then(data => {
  console.log(data)
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
