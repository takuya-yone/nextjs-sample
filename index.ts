import express, { Application, Request, Response } from 'express'

import bodyParser from 'body-parser'
import session  from 'express-session'
import next from 'next'


const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const log4js = require('log4js');
const logger = log4js.getLogger();

//config
log4js.configure({
    appenders: {
        system: {type: 'stdout'},
        access: {type: 'stdout'} 
    },
    categories: {
        default: {appenders:['system'], level: 'debug'},
        web: {appenders: ['access'], level: 'info'} 
    }
});

//logger
var systemLogger = log4js.getLogger(); 
var accessLogger = log4js.getLogger('web'); 


app.prepare().then(() => {
  const server = express()
  server.use(log4js.connectLogger(accessLogger));
  server.use(bodyParser.json())

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  try {
    server.listen(port, () => {
      console.log('server is running!!!')
    })
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
    }
  }



})