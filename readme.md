# Quasar Utils
Quasar Utils and Helpers

## Plugins
A collection of helpers to facilitate access to some quasar features

### Dialogs
Adds `this.$dialogs` to components instances

```js
/**
 * @param {String} title
 * @param {String} message
 *
 * @returns Promise<void>
 */
.confirm(title, message)

/**
 * @param {String} title
 * @param {String} message
 *
 * @returns Promise<void>
 */
.info(title, message)

/**
 * @param  {String} title
 * @param  {String} message
 * @param  {Object} options {type='textbox', model: '', label: ''}
 *
 * @return {Object}         { model: {String} }
 */
.prompt(title, message, { type = 'textbox', label, model = '' })

```

Exemple:

```js
this.$dialogs.confirm('Alert', 'This action can not be undone')
  .then(() => {
    // do action
  })
  .catch (() => {
    // don't do action
  })
```
