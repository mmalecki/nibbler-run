var apt = require('nibbler-apt')

module.exports = [
  [ apt, {
    pkg: ['nginx'],
    state: 'present'
  } ]
]
