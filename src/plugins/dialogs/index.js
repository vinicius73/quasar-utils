import * as actions from './actions'

export default Vue => {
  Object.defineProperty(Vue.prototype, '$dialogs', {
    get: () => actions
  })
}
