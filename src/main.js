import component from './component'

let Vue = {}

let GreatComponent = {
  install (_Vue) {
    Vue = _Vue
    Vue.component('great-component', component)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('great-component', GreatComponent)
}
export default GreatComponent
