import { Router } from 'express'
import { getAllComments } from '../controllers/commentsController'

const router = Router()

router.get('/', getAllComments)

export default router
