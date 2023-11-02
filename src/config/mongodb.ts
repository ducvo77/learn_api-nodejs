import { Db, MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const MONGNODB_URI: string = process.env.MONGNODB_URI || ''
const DATABASE_NAME: string = 'learn_api'
let databaseInstance: Db | null = null

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client: MongoClient = new MongoClient(MONGNODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  try {
    await client.connect()
    databaseInstance = client.db(DATABASE_NAME)
  } catch (error) {
    console.log(error)
  }
}

export const GET_DB = () => {
  if (!databaseInstance) throw 'Must connect to Databse first'
  return databaseInstance
}
