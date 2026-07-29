import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { connectDatabase } from './config/database.js'
import { errorHandler, notFoundHandler } from './middleware/error-handler.js'
import contactRoutes from './routes/contact-routes.js'

const app = express()
const port = Number(process.env.PORT || 5000)
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())

app.disable('x-powered-by')
app.set('trust proxy', 1)
app.use(helmet())
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }
      callback(new Error('Origin is not allowed by CORS.'))
    },
  }),
)
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (request, response) => {
  response.json({ success: true, service: 'portfolio-api' })
})
app.use('/api/contact', contactRoutes)
app.use(notFoundHandler)
app.use(errorHandler)

async function start() {
  try {
    await connectDatabase(process.env.MONGODB_URI)
    app.listen(port, () => {
      console.log(`Portfolio API listening on port ${port}`)
    })
  } catch (error) {
    console.error('Unable to start portfolio API:', error)
    process.exitCode = 1
  }
}

void start()
