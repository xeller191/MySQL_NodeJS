const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/', userController.index)

//get one
router.get('/:id', userController.show)

//insert
router.post('/', userController.insert)

//update
router.put('/:id', userController.update)

//delete
router.delete('/:id', userController.delete)
module.exports = router
