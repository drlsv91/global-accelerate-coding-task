import { CommentAttributes } from './Comment'
import { CharacterInstance } from './Character'
import { Model, DataTypes, Optional } from 'sequelize'
import Sequelize from 'sequelize'

import sequelize from '../utils/database'

export interface EpisodeAttributes {
  id: number
  name: string
  releaseDate: Date
  episodeCode: string
  characters?: any
  created: Date
}

interface EpisodeCreationAttributes extends Optional<EpisodeAttributes, 'id'> {}

export interface EpisodeInstance
  extends Model<EpisodeAttributes, EpisodeCreationAttributes>,
    EpisodeAttributes {
  getCharacters: Sequelize.BelongsToManyGetAssociationsMixin<CharacterInstance>

  createComment: Sequelize.HasManyCreateAssociationMixin<CommentAttributes>
}

const EpisodeModel = sequelize.define<EpisodeInstance>('Episode', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  episodeCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  created: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

export default EpisodeModel
