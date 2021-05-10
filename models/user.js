'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: DataTypes.STRING,
            created_at: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'User',
        }
    )
    return User
}
