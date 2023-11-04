const mongoose = require('mongoose');

const reservationCarSchema = new mongoose.Schema(
  {
    start: Date,
    end: Date,
    place: String,
    // price: String,
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('ReservationCar', reservationCarSchema);
