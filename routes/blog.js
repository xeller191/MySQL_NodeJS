const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blogController')

/* GET users listing. */
router.get('/', blogController.find)

module.exports = router
