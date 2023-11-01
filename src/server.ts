import express, { Request, Response, Express } from 'express'

const app: Express = express()

const hostname: string = 'localhost'
const port: number = 8080

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, hostname, () => {
  console.log(`Running server at http://${hostname + ':' + port}/`)
})
