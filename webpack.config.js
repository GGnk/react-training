require('dotenv').config()
console.log('Mode config = ', process.env.NODE_ENV);

module.exports = process.env.NODE_ENV === 'development'
    ? require('./webpack.config.dev')
    : require('./webpack.config.prod');