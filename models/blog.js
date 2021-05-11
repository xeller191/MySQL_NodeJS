'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Blog extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Blog.belongsTo(models.User, {
                // many to one
                as: 'user',
                foreignKey: 'user_id', //fk ของ user table
                sourceKey: 'id', //primary key(pk) ของตัวมันเอง (blogs)   **จำง่ายๆ source key คือ ของตัวมันเองเสมอ
            })
        }
    }
    Blog.init(
        {
            title: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Blog',
            tableName: 'blogs', //ชื่อตารางในฐานข้อมูล
            timestamps: false, //ถ้าไม่ใช่ timestamp ให้ปิดไว้
        }
    )
    return Blog
}
