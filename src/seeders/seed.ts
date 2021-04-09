import createCharacters from './createCharacter'
import createComments from './createComment'
import createEpisode from './createEpisode'
import createLocation from './createLocation'

async function seed() {
  await createCharacters()
  await createEpisode()
  await createComments()
  createLocation()
}

export default seed
