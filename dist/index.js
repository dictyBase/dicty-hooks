
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dicty-hooks.cjs.production.min.js')
} else {
  module.exports = require('./dicty-hooks.cjs.development.js')
}
