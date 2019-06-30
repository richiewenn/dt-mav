// next.config.js
const withLess = require('@zeit/next-less')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(withLess({
  /* config options here */
  webpack(config, options) {
    return config
  },
}))
