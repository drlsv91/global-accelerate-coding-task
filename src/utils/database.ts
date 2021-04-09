import { Sequelize } from 'sequelize'
import config from 'config'

const sequelize = new Sequelize(
  'global-accelerate-task',
  config.get('db_username'),
  config.get('db_password'),
  { dialect: 'mysql', host: 'localhost' },
)
export default sequelize
