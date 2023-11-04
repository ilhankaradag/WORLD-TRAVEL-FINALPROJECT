const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
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

const Product = mongoose.model('Reservation', reservationSchema);
