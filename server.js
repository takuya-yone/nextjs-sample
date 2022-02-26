const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
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
  server.use(session({
    secret: 'zZAai8301bSnuA8sabUwabxe3',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})