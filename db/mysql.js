import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('line', 'line', 'dvETVz2A2WCsFhKX', {
    host: 'codingthailand.com',
    port: 3306,
    dialect: 'mysql'
});

export default sequelize;