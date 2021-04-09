import { EpisodeAttributes } from './Episode'
import { Model, DataTypes, Optional } from 'sequelize'
import Sequelize from 'sequelize'
import sequelize from '../utils/database'

export interface CommentAttributes {
  id: number
  comment: string
  ipAddressLocation: string
  created: Date
  episodeId?: number
}

interface CommentCreationAttributes extends Optional<CommentAttributes, 'id'> {}

export interface CommentInstance
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {
  createEpisode: Sequelize.BelongsToCreateAssociationMixin<EpisodeAttributes>
}

const CommentModel = sequelize.define<CommentInstance>('Comment', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ipAddressLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

export default CommentModel
