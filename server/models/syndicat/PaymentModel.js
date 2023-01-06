const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  apartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Apartment',
  },
  tenant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

module.exports = mongoose.model('Payment', paymentSchema);