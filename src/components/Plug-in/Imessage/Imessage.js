import Vue from 'vue'
import _ from 'lodash'
import './Imessage.css'
import mixin from '../mixin/mixin'
const imessage = {
    install (Vue) {
        const that = this
        Object.defineProperty(Vue.prototype, '$imessage', {
            value: (val) => {
                that.init(val,'imessage')
                
            }
        })
    },
    ...mixin
}
Vue.use(imessage)

export default imessage