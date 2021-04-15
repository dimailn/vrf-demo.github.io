<template>
  <div id="app">
    <v-app>
      <rf-form :resource="resource" style="display: flex; flex-direction: column;">
        <rf-select name="mode" :options="engines" />
        <rf-input name="title" />
        <rf-checkbox name="checked" />
      </rf-form>
    </v-app>
  </div>
</template>

<script>

import vuetifyStylesFile from '!file-loader!vuetify/dist/vuetify.min.css'

import wrapComponents from './utils/wrap-components'

export default {
  name: 'App',
  components: wrapComponents(
    [
      'input',
      'select',
      'checkbox'
    ]
  ),
  data(){
    return {
      resource: {
        title: '',
        mode: 'vrf',
        checked: false
      },
    }
  },
  watch: {
    'resource.mode': function() {
      if(this.resource.mode == 'vuetify') {
        var head = document.getElementsByTagName('head')[0]
        var link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = vuetifyStylesFile
        link.id ='vuetify-style'
        head.appendChild(link)
      } else {
        document.querySelector('#vuetify-style')?.remove()
      }
    }
  },
  computed: {
    engines() {
      return [
        {
          id: 'vrf',
          title: 'Vrf core'
        },
        {
          id: 'vuetify',
          title: 'vrf-vuetify'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
