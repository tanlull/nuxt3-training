import { DataTypes } from 'sequelize';
import sequelize from '../db/mysql';  

const User = sequelize.define('User', {
  fullname: {
    type: DataTypes.STRING(200),
    allowNull: false, // NOT NULL
  },
}, {
  // Other model options go here
   timestamps: false,
   tableName: "users" 
});

export default User;