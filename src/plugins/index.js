import dialogs from './dialogs'
import loading from './loading'
import toast from './toast'

export default Vue => {
  dialogs(Vue)
  loading(Vue)
  toast(Vue)
}
