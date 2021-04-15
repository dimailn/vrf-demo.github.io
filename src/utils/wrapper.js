import {descriptors, Resource, components as vrfComponents} from 'vrf'
import VrfVuetify from 'vrf-vuetify'
import {camelCase, capitalize} from 'lodash'

const engines = {
  vuetify: VrfVuetify
}

const cache = {}

export default (name) => {
  return {
    mixins: [
      Resource
    ],
    props: descriptors[name].props,
    render(h) {
      return h(this.component, {props: this.$props})
    },
    computed: {
      component() {
        const {mode} = this.$resource
        const componentName = 'Rf' + capitalize(camelCase(name))

        if(mode == 'vrf') {
          return  vrfComponents[componentName]
        }

        if(cache[componentName])
          return cache[componentName]

        cache[componentName] = {
          extends: descriptors[name],
          ...engines[mode].components[componentName]
        }

        return cache[componentName]
      }
    }
  }
}