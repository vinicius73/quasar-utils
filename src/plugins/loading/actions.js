import { Loading } from 'quasar-framework'

export const show = (message, args = {}) => {
  return Loading.show({
    spinner: 'dots',
    delay: 0,
    message,
    ...args
  })
}

export const hide = () => Loading.hide()
