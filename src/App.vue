<template>
  <div id="app">
    <p class="header">Select an adapter</p>
    <rf-form :resource="resource" class="form">
      <rf-select-adapter name="mode" :options="engines" />
    </rf-form>

    <v-app>
      <rf-form :resource="resource" class="form">
        <rf-select name="mode" :options="engines" />
        <rf-input name="title" />
        <rf-checkbox name="checked" />
        <rf-datepicker name="date" />
        <rf-textarea name="description" />
        <rf-submit />
      </rf-form>
    </v-app>
  </div>
</template>

<script>

import vuetifyStylesFile from '!file-loader!vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

import wrapComponents from './utils/wrap-components'
import RfSelectAdapter from './components/rf-select-adapter'


const styles = {
  vuetify: vuetifyStylesFile
}

export default {
  name: 'App',
  components: {
    ...wrapComponents(
      [
        'input',
        'select',
        'checkbox',
        'textarea',
        'submit',
        'datepicker'
      ]
    ),
    RfSelectAdapter
  },
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
      document.querySelectorAll('#adapter-style').forEach((el) => el.remove())

      if(this.resource.mode == 'vuetify') {
        const style = styles.vuetify

        var head = document.getElementsByTagName('head')[0]
        var link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = style
        link.id = 'adapter-style'
        head.appendChild(link)
      }
    }
  },
  computed: {
    engines() {
      return [
        {
          id: 'vrf',
          title: 'Vrf core',
          image: 'logo.png'
        },
        {
          id: 'vuetify',
          title: 'vrf-vuetify',
          image: 'vuetify.svg'
        }
      ]
    }
  }
}
</script>

<style>
.header {
  font-size: 30px;
  margin-bottom: 25px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form {
  display: flex;
  flex-direction: column;
  /*width: 50%;*/
  margin: 0 auto;
}

@media screen and (max-width: 900px) {
  .form {
    width: 90%;
  }
}

@media screen and (min-width: 900px) {
  .form {
    width: 40%;
  }
}

</style>
