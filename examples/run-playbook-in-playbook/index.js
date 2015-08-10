var run = require('nibbler-run')

module.exports = [
  [ run, require('./nginx.js') ],
  [ run, require('./build-essential.js') ]
]
