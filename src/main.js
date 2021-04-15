import Vue from 'vue'
import Vrf from 'vrf'
import vuetify from './vuetify'

import App from './App.vue'

Vue.use(Vrf, {translate: (name) => name})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')
