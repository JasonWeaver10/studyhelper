const { environment } = require('@rails/webpacker')

const path = require('path')

const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@utils': path.resolve(__dirname, '..', '..', 'app/javascript/utils'),

    }
  }
}
environment.config.merge(customConfig);

//enable chunks 
environment.splitChunks()

module.exports = environment
