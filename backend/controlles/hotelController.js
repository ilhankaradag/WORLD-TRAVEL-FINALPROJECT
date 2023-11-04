const Hotel = require('../models/Hotel.js');

const getAllHotels = async (req, res) => {
  try {
    let hotels = await Hotel.find();
    res.status(200).send(hotels);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'server error from getAll controllers' });
  }
};

const getHotel = async (req, res) => {
  try {
    let hotel = await Hotel.findById(req.params.id);
    res.status(200).send(hotel);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'server error from getHotel controllers' });
  }
};

const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'server error from create controllers' });
  }
};

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'server error from update controllers' });
  }
};

const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted.');
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: 'server error from delete controllers' });
  }
};
module.exports = {
  createHotel,
  getAllHotels,
  updateHotel,
  deleteHotel,
  getHotel,
};
