import { Sequelize } from 'sequelize'
import config from 'config'

console.log(config.get('db_username'))
console.log(config.get('db_password'))
const sequelize = new Sequelize(
  'global-accelerate-task',
  config.get('db_username'),
  config.get('db_password'),
  { dialect: 'mysql', host: 'localhost' },
)
export default sequelize
