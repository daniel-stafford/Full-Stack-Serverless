//hack to prevent typescript from yelling at me on line 4
export {}
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')

const server = awsServerlessExpress.createServer(app)

//entry point for function invocation
//can run function directly here but instead we use express via. app.js
exports.handler = (event: any, context: any) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
}
