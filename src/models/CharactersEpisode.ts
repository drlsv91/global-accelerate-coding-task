import { Model, DataTypes, Optional } from 'sequelize'

import sequelize from '../utils/database'

interface CharactersEpisodeAttributes {
  id: number
  episodeId: number
  characterId: number
}

interface CharactersEpisodeCreationAttributes
  extends Optional<CharactersEpisodeAttributes, 'id'> {}

interface CharactersEpisodeInstance
  extends Model<
      CharactersEpisodeAttributes,
      CharactersEpisodeCreationAttributes
    >,
    CharactersEpisodeAttributes {}

const CharactersEpisodeModel = sequelize.define<CharactersEpisodeInstance>(
  'CharactersEpisode',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
    },
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    episodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
)

export default CharactersEpisodeModel
