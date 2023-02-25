const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist');

router.post('/', artistController.createArtist);

router.get('/', artistController.readArtist);

router.get('/:id', artistController.singleArtistById);

router.patch('/:id', artistController.patchArtistById);

router.delete('/:id', artistController.deleteArtistById);


module.exports = router;