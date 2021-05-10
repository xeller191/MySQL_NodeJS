const models = require('../models/index')

exports.index = async (req, res, next) => {
    const users = await models.User.findAll()
    res.status(200).json({
        data: users,
    })
}
