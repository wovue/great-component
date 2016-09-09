require('src-docs/styles/main.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTransferDom from 'vue-transfer-dom'

import Root from './components/Root'
import GreatComponent from 'src/main.js'

import router from './config/router'
import registerComponents from './config/registerComponents'

Vue.use(VueRouter)
Vue.use(VueTransferDom)
Vue.use(GreatComponent)

registerComponents(Vue)

router.start(Root, '#root')
