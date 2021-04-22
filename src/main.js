import Vue from 'vue'
import Vrf from 'vrf'
import vuetify from './vuetify'

import App from './App.vue'

import { BootstrapVue, IconsPlugin  } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)


Vue.use(Vrf, {translate: (name) => name})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')
