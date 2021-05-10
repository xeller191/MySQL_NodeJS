const models = require('../models/index')

exports.index = async (req, res, next) => {
    // const users = await models.User.findAll()

    //method1
    // const users = await models.User.findAll({
    //     attributes: ['id', 'name', 'email', 'created_at'], // *เอาเลือกมาแสดง
    //     order: [['id', 'desc']], //orderBy
    // })

    //method2
    // const users = await models.User.findAll({
    //     attributes: { exclude: ['password'] }, // *ยกเว้น
    //     order: [['id', 'desc']], //orderBy
    // })

    //method3 use WHERE
    // const users = await models.User.findAll({
    //     attributes: { exclude: ['password'] }, // *ยกเว้น
    //     where: { email: 'art@gmail.com' },
    //     order: [['id', 'desc']], //orderBy
    // })

    //method3 use AS
    // const users = await models.User.findAll({
    //     attributes: ['id', 'name', ['email', 'emailNew'], 'created_at'],
    //     order: [['id', 'desc']], //orderBy
    // })

    // SQL
    const sql = 'select id,name,email,created_at from users order by id desc'
    const users = await models.sequelize.query(sql, { type: models.sequelize.QueryTypes.SELECT })
    res.status(200).json({
        data: users,
    })
}
