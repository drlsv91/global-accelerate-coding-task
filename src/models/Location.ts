import { Model, DataTypes, Optional } from 'sequelize'

import sequelize from '../utils/database'

interface LocationAttributes {
  id: number
  name: string
  latitude: number
  longitude: number
  characterId?: number
  created: Date
}

interface LocationCreationAttributes
  extends Optional<LocationAttributes, 'id'> {}

interface LocationInstance
  extends Model<LocationAttributes, LocationCreationAttributes>,
    LocationAttributes {}

const LocationModel = sequelize.define<LocationInstance>('Location', {
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
  latitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },

  created: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

export default LocationModel
