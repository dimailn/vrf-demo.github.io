import {descriptors, Resource, components as vrfComponents} from 'vrf'
import VrfVuetify from 'vrf-vuetify'
import VrfBootstrap from 'vrf-bootstrap'
import {camelCase, capitalize} from 'lodash'

const engines = {
  vuetify: VrfVuetify,
  bootstrap: VrfBootstrap
}

const cache = {}


export default (name) => {
  const descriptor = name === 'switch' ? descriptors.checkbox : descriptors[name]
  return {
    mixins: [
      Resource
    ],
    props: descriptor.props,
    render(h) {
      return h(this.component, {props: this.$props, key: name + this.$resource.mode})
    },
    computed: {
      component() {
        const {mode} = this.$resource
        const componentName = 'Rf' + capitalize(camelCase(name))

        if(mode == 'vrf') {
          return  vrfComponents[componentName]
        }

        if(cache[mode] && cache[mode][componentName])
          return cache[mode][componentName]

        cache[mode] ||= {}

        cache[mode][componentName] = {
          extends: descriptor,
          ...engines[mode].components[componentName]
        }

        return cache[mode][componentName]
      }
    }
  }
}