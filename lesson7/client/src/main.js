import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Carousel,CarouselItem} from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
