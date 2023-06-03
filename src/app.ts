import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

//middleware
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Applications routes
app.use('/api/v1/users/', usersRouter)

//testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully!')
})
console.log(app.get('env'))
export default app
