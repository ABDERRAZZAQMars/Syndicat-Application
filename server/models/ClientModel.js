const mongoose = require("mongoose");
const Appartement = require('./AppartementModel')

const clientSchema = mongoose.Schema({
    First_Name: {
        type: String,
        require: [true, "SVP Entrer Votre Prénom"]
    },
    Last_Name: {
        type: String,
        require: [true, "SVP Entrer Votre Nom de famille"]
    },
    CIN: {
        type: String,
        require: [true, "SVP Entrer Votre CIN"]
    },
    Email: {
        type: String,
        require: [true, "SVP Entrer Votre E-mail"]
    },
    Phone: {
        type: String,
        require: [true, "SVP Entrer Votre Number de Télélphone"]
    },
    Number_Appartement: {
        type: Number,
        required: [true, "SVP Entrer Votre Number de Appartement"],
        unique: true,
        ref: Appartement
    },

})

module.exports = mongoose.model("Client", clientSchema);