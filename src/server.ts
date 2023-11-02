import express, { Request, Response, Express } from 'express'
import { CONNECT_DB, GET_DB } from './config/mongodb'
import dotenv from 'dotenv'
dotenv.config()

const START_SERVER = () => {
  const app: Express = express()

  const hostname: string = process.env.HOST_NAME || 'localhost'
  const port: number = Number(process.env.PORT) || 8888

  // ;(async () => console.log(await GET_DB().listCollections().toArray()))()

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

  app.listen(port, hostname, () => {
    console.log(`Running server at http://${hostname + ':' + port}/`)
  })
}

CONNECT_DB()
  .then(() => console.log('Connect database successfully!'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
