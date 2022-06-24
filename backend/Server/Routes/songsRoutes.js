const express = require('express')
const router = express.Router()
const songsController = require('../Controllers/songsController');

router.route('/')
    .get(songsController.getSongs)
    .post(songsController.addSongs)

router.route('/:id')
    .put(songsController.editSongs)
    .delete(songsController.deleteSongs)

router.route('/mysongs/:id')
    .get(songsController.getPrivatesongs)

// router.route('/newcourse')
//     .post(songsController.addMySongs)


module.exports = router