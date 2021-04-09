import { Router } from 'express'
import {
  getAllCharacters,
  getCharacterEpisodes,
} from '../controllers/characterController'

const router = Router()

router.route('/').get(getAllCharacters)
router.get('/:characterId/episodes', getCharacterEpisodes)

export default router
