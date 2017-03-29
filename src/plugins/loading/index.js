import * as actions from './actions'

export default Vue => {
  Object.defineProperty(Vue.prototype, '$loading', {
    get: () => actions
  })
}
