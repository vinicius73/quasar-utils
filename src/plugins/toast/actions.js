import { Toast } from 'quasar-framework'
import isEmpty from 'lodash.isempty'

/**
 * @name getHtml
 *
 * @param {String} title
 * @param {String} message
 *
 * @returns String
 */
const getHtml = (title, message) => {
  if (isEmpty(message)) {
    return title
  }

  return `<big>${title}</big><p>${message}</p>`
}

/**
 * @name getArgs
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 *
 * @returns Object
 */
const getArgs = (title, message = '', args = {}) => ({
  html: getHtml(title, message),
  timeout: 5000,
  ...args
})

const makeCall = (type, defaults = {}) =>
  (title, message = '', args = {}) => Toast.create[type](getArgs(title, message, {...defaults, ...args}))

/**
 * @name error
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
export const error = makeCall('negative')

/**
 * @name success
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
export const success = makeCall('positive')

/**
 * @name warning
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
export const warning = makeCall('warning')

/**
 * @name info
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
export const info = makeCall('info')

/**
 * @name alert
 *
 * @param {String} title
 * @param {String} message
 * @param {Object} args
 */
export const alert = warning
