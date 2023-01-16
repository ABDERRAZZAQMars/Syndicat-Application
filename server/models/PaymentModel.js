const mongoose = require("mongoose");
const Appartement = require('./AppartementModel')
const Client = require('./ClientModel')

const paymentSchema = mongoose.Schema({
    CIN: {
        type: String,
        require: [true, "SVP Entrer Votre CIN"],
        ref: Client
    },
    Number_Appartement: {
        type: Number,
        require: [true, "SVP Entrer Votre Number de Appartement"],
        ref: Appartement
    },
    Date: {
        type: Date,
        required: [true, "Choisir la date de payment "]
    },
    Montant: {
        type: Number,
        required: [true, "SVP Enter a montant de Paiment"]
    },
    Statut_Payment: {
        type: String,
        enum: ['No Payé', 'Payé'],
        default: 'No Payé',
    }
})

module.exports = mongoose.model("Payment", paymentSchema);