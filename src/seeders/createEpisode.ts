import CharacterModel from '../models/Character'
import EpisodeModel from '../models/Episode'

async function createEpisode() {
  try {
    const episode = await EpisodeModel.bulkCreate([
      {
        name: 'Episode 1',
        releaseDate: new Date('7/7/2019'),
        episodeCode: 'CC21',
        created: new Date(),
      },
      {
        name: 'Episode 11',
        releaseDate: new Date('7/6/2020'),
        episodeCode: 'CC22',
        created: new Date(),
      },
    ])
    const characters = await CharacterModel.findAll({
      where: { id: [1, 2] },
      include: ['episodes'],
    })
    characters.forEach(async (character, i) => {
      await character.addEpisode(episode[i])
    })
    console.log('episode created successfully')
  } catch (err) {
    console.log('could not create episode ', err)
  }
}

export default createEpisode
