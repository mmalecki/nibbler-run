var apt = require('nibbler-apt')

module.exports = [
  [ apt, {
    pkg: ['build-essential'],
    state: 'present'
  } ]
]
