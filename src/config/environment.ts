import 'dotenv/config'

const env: {
  HOST_NAME: string
  PORT: number
  MONGNODB_URI: string
  DATABASE_NAME: string
} = {
  HOST_NAME: process.env.HOST_NAME || '',
  PORT: Number(process.env.PORT) || 888,
  MONGNODB_URI: process.env.MONGNODB_URI || '',
  DATABASE_NAME: process.env.DATABASE_NAME || ''
}

export default env
