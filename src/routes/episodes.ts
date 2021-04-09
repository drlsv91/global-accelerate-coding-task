import { Router } from 'express'
import { createComment, getAllEpisode } from '../controllers/episodeController'

const router = Router()

router.get('/', getAllEpisode)

router.post('/:episodeId/comments', createComment)

export default router
