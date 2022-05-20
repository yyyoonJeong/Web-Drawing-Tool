import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

export const EventBus = new Vue()
//https://sally-world.tistory.com/9 L7, L8 추가

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
