const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add',TaskController.createAnime)
router.post('/add',TaskController.createAnimeSave)
router.get('/',TaskController.showAnimes)
router.get('/edit/:id', TaskController.updateAnime)
router.post('/edit',TaskController.updateAnimePost)
router.post('/remove',TaskController.removeAnime)
router.post('/done',TaskController.statusAnime)

module.exports = router