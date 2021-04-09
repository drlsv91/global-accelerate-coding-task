import { EpisodeAttributes, EpisodeInstance } from './Episode'
import { Model, DataTypes, Optional } from 'sequelize'
import Sequelize from 'sequelize'

import sequelize from '../utils/database'

export enum Status {
  ACTIVE = 'ACTIVE',
  DEAD = 'DEAD',
  UNKNOWN = 'UNKNOWN',
}
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

interface CharacterAttributes {
  id: number
  firstName: string
  lastName: string
  status: Status
  stateOfOrigin?: string
  gender: Gender
  location?: number
  episodes?: number
  created: Date
}

interface CharacterCreationAttributes
  extends Optional<CharacterAttributes, 'id'> {}

export interface CharacterInstance
  extends Model<CharacterAttributes, CharacterCreationAttributes>,
    CharacterAttributes {
  addEpisode: (episode: EpisodeAttributes) => Promise<object>

  getEpisodes: Sequelize.BelongsToManyGetAssociationsMixin<EpisodeInstance>
}

const CharacterModel = sequelize.define<CharacterInstance>('Character', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stateOfOrigin: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  created: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

export default CharacterModel
