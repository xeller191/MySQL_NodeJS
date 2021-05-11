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

exports.show = async (req, res, next) => {
    try {
        const { id } = req.params
        //method1
        const user = await models.User.findByPk(id, { attributes: { exclude: ['password'] } }) //find by primary key
        if (!user) {
            const error = new Error('ไม่พบผู้ใช้นี้ในระบบ')
            error.statusCode = 404
            throw error
        }

        // //Method2 SQL
        // const sql = `select * from users where id=${id}`
        // const user = await models.sequelize.query(sql, { type: models.sequelize.QueryTypes.SELECT })
        res.status(200).json({
            data: user,
        })
    } catch (error) {
        res.status(error.statusCode).json({
            error: {
                message: error.message,
            },
        })
    }
}

exports.insert = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        //check email ซ้ำ
        const existEmail = await models.User.findOne({ where: { email: email } })
        if(existEmail){
            const error = new Error('ไม่พบผู้ใช้นี้ในระบบ **email ซ้ำ' )
            error.statusCode = 400
            throw error
        }
        
        //insert user
        const user = await models.User.create({
            name,
            email,
            password,
        })
        res.status(200).json({
            message: 'เพิ่มข้อมูลเรียบร้อยแล้ว',
            data: {
                id: user.id,
                email: user.email,
            },
        })
    } catch (error) {
        res.status(error.statusCode).json({
            error: {
                message: error.message,
            },
        })
    }
}
