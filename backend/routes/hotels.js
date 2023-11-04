const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

const {
  createHotel,
  updateHotel,
  getAllHotels,
  deleteHotel,
  getHotel,
} = require('../controlles/hotelController.js');

//CREATE
router.post('/', createHotel);
//UPDATE
router.put('/:id', updateHotel);
//DELETE
router.delete('/:id', deleteHotel);
//GET
router.get('/:id', getHotel);
//GET ALL
router.get('/', getAllHotels);

module.exports = router;
