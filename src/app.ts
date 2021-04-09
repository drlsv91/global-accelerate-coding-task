import express, { Request, Response, NextFunction } from 'express'
import { json } from 'body-parser'
import sequelize from './utils/database'
import createAssociation from './utils/association'
import episodeRoutes from './routes/episodes'
import commentRoutes from './routes/comments'
import characterRoutes from './routes/characters'
import seed from './seeders/seed'

const app = express()
app.use(json())

// routes
app.use('/api/episodes', episodeRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/characters', characterRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: err.message })
})

// createAssociation
createAssociation()
// initialize database
sequelize
  .sync({ force: true })
  .then((res) => {
    seed()
    console.log('successfully initialized')
  })
  .catch((err) => console.log(err))

const port = process.env.Port || 5000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
