import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import router from './routers'
import { notFoundError, returnError } from './middleware/errorHandle.middleware'
import instanceMongoDb from './database'

const app: express.Application = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

instanceMongoDb()

app.use('/api/v1', router)

app.use(notFoundError)

app.use(returnError)

export default app
