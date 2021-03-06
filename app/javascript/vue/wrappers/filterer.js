/* eslint no-console: 0 */
import FiltererComponent from 'vue/components/filterer/base.vue'
import {Wrapper, Vue} from './wrapper'

export default class Filterer extends Wrapper {
  render() {
    super.render()
    const vueApp = new Vue({
      el: this.container,
      data: this.prepareData(),
      components: {
        'filterer': FiltererComponent
      }
    })
  }

  prepareData() {
    let definition = this.options.definition
    let payload = this.options.payload
    let ui_options = this.options.ui_options

    return {
      definition: definition,
      sort_rules: payload.sort_rules,
      constrains: payload.constrains,
      ui_options: ui_options
    }
  }
}