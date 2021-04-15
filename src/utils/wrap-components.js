import wrapper from './wrapper'
import {camelCase, capitalize} from 'lodash'

export default (components) => {
  return components.reduce((componentsIndex, name) => {
    componentsIndex['Rf' + capitalize(camelCase(name))] = wrapper(name)
    return componentsIndex
  }, {})
}