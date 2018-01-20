import Vue from 'vue'
import _ from 'lodash'
import './Loading.scss'
import mixin from '../mixin/mixin'

const loading = {
    install (opt) {
        Object.defineProperty(Vue.prototype, '$load', {
            value: {
                show: (parent) => {
                    var parent = document.querySelector(`${parent}`)
                    var el = this.createdElement('div', {class: 'load'}, ['loading...'])
                    parent.appendChild(el)
                },
                hide: (parent) => {
                    var parent = document.querySelector(`${parent}`)
                    document.querySelector('.load').remove(parent)
                }
            }
        })
    },
    ...mixin
}
Vue.use(loading)

export default loading