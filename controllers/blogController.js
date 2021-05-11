const models = require('../models/index')
exports.find = async (req, res, next) => {
    const blogs = await models.Blog.findAll({
        include: [
            {
                model: models.User, //join ที่ เมนู user
                as: 'user', //ใช้ 2ที่ คือ controller และ model
                attributes: ['id', 'name'], //ให้แสดงแค่  'id', 'title'
            },
        ],
        order: [
            ['id'], //ของ blogs  เรียง ตาม id แบบ desc  //มีการ join table
        ], //orderBy
    })
    res.status(200).json({
        data: blogs,
    })
}
