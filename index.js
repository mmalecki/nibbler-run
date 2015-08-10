var async = require('async')
var normalize = require('nibbler-normalize')

module.exports = function (playbook, context, cb) {
  return normalize(playbook)(context, cb)
}
