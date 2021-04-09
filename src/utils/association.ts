import EpisodeModel from '../models/Episode'
import CommentModel from '../models/Comment'
import CharacterModel from '../models/Character'
import LocationModel from '../models/Location'
import CharactersEpisodeModel from '../models/CharactersEpisode'

function createAssociation() {
  // association
  // episode has many comments and

  EpisodeModel.hasMany(CommentModel, {
    foreignKey: 'episodeId',
    as: 'comments',
  })
  // CommentModel.belongsTo(EpisodeModel)

  // character can feature in many episode
  CharacterModel.belongsToMany(EpisodeModel, {
    through: 'CharactersEpisode',
    foreignKey: 'characterId',
    as: 'episodes',
  })

  // episode can have many characters
  EpisodeModel.belongsToMany(CharacterModel, {
    through: 'CharactersEpisode',
    foreignKey: 'episodeId',
    as: 'characters',
  })
  // character has one location
  CharacterModel.hasOne(LocationModel, {
    foreignKey: 'characterId',
  })

  // LocationModel.belongsTo(CharacterModel, {
  //   foreignKey
  // })

  CharactersEpisodeModel.belongsTo(CharacterModel, {
    foreignKey: 'characterId',
  })
  CharactersEpisodeModel.belongsTo(EpisodeModel, {
    foreignKey: 'episodeId',
  })
}

export default createAssociation
