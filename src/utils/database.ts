import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  'global-accelerate-task',
  'root',
  'seunlsv1992',
  { dialect: 'mysql', host: 'localhost' },
)
export default sequelize
