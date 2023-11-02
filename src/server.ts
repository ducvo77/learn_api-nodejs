import express, { Request, Response, Express } from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb'

import env from './config/environment'

const START_SERVER = () => {
  const app: Express = express()

  const hostname: string = env.HOST_NAME || 'localhost'
  const port: number = env.PORT || 8888

  // ;(async () => console.log(await GET_DB().listCollections().toArray()))()

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

  app.listen(env.PORT, env.HOST_NAME, () => {
    console.log(`Running server at http://${hostname + ':' + port}/`)
  })

  exitHook(() => {
    console.log('close server')
    CLOSE_DB()
  })
}

CONNECT_DB()
  .then(() => console.log('Connect database successfully!'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error)
  })
