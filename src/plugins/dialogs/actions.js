import { Dialog } from 'quasar-framework'

/**
 * @name makeButton
 *
 * @param {String} label
 * @param {Function} handler
 * @param {Object} extra
 *
 * @returns Object
 */
const makeButton = (label, handler, extra = {}) => ({
  label,
  handler,
  ...extra
})

const createDialog = (args, onDismiss) => Dialog.create({
  onDismiss,
  noEscDismiss: true,
  noBackdropDismiss: true,
  ...args
})

/**
 * @name confirm
 *
 * @param {String} title
 * @param {String} message
 *
 * @returns Promise<void>
 */
export const confirm = (title, message) => new Promise((resolve, reject) => {
  const buttons = [makeButton('No', reject), makeButton('Yes', resolve)]
  return createDialog({ title, message, buttons }, reject)
})

export const info = (title, message) => new Promise((resolve, reject) => {
  const buttons = [makeButton('ok', resolve)]
  return createDialog({ title, message, buttons }, reject)
})

/**
 * [prompt description]
 *
 * @method prompt
 *
 * @param  {[string]} title            [description]
 * @param  {[string]} message          [description]
 * @param  {[string]} [type='textbox'] [description]
 * @param  {[string]} label            [description]
 * @param  {[string]} [model=''        }]            [description]
 *
 * @return {[type]}                  [description]
 */
export const prompt = (title, message, { type = 'textbox', label, model = '' }) =>
  new Promise((resolve, reject) => {
    const buttons = [makeButton('No', reject), makeButton('Yes', resolve)]
    const input = { type, label, model }
    return createDialog({ title, message, buttons, form: { input } }, reject)
  })
