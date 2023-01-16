const asyncHandler = require('express-async-handler');
const Paiment = require('../models/PaymentModel');
const ClientModel = require('../models/ClientModel');
const AppartementModel = require('../models/AppartementModel');


// method : POST 
// url : /payment
// acces : Private - Admin

const CreatePaiment = asyncHandler(async (req, res) => {
    const { CIN, Number_Appartement, Date, Montant, Statut_Payment } = req.body;
    if (!CIN || !Number_Appartement || !Date || !Montant || !Statut_Payment) {
        return res.status(400).json({ message: "Veuillez remplir tous les champs" })
    }
    // search for ID appartement TO send in req Add Paiment
    const SearchAppartement = await AppartementModel.findOne({ Number_Appartement: req.body.Number_Appartement });
    if (!SearchAppartement) {
        return res.status(400).json({ message: "Appartement introuvable" })
    }
    // search for ID Client TO send in req Add Paiment
    const SearchClient = await ClientModel.findOne({ CIN: CIN })
    if (!SearchClient) {
        return res.status(400).json({ message: "Client introuvable" })
    }
    // get ID Client and Appartement to send it to table paiment 
    const idClient = SearchClient._id;
    const idAppartement = SearchAppartement._id;
    // send DATA to table Paiment:
    const paiment = await Paiment.create({
        CIN: idClient,
        Number_Appartement: idAppartement,
        Date,
        Montant,
        Statut_Payment
    });
    if (paiment) {
        return res.status(200).json({ message: "Paiement passé avec succès" });
    } else {
        return res.status(400).json({ message: "Données de paiement invalides" })
    }
})

// method : PUT 
// url : /payment/:id
// acces : Private - Admin

const UpdatePaiment = asyncHandler(async (req, res) => {
    const { CIN,  Number_Appartement, Date, Montant, Statut_Payment } = req.body;
    const _id = req.params.id;
    if (!CIN || !Number_Appartement || !Date || !Montant || !Statut_Payment) {
        return res.status(400).json({ message: "Veuillez remplir tous les champs" })
    }
    // search for ID appartement TO send in req Add Paiment
    const SearchAppartement = await AppartementModel.findOne({ Number_Appartement: req.body.Number_Appartement });
    if (!SearchAppartement) {
        return res.status(400).json({ message: "Appartement introuvable" })
    }
    // search for ID Client TO send in req Add Paiment
    const SearchClient = await ClientModel.findOne({ CIN: CIN })
    if (!SearchClient) {
        return res.status(400).json({ message: "Client introuvable" })
    }
    // get ID Client and Appartement to send it to table paiment 
    const idClient = SearchClient._id;
    const idAppartement = SearchAppartement._id;
    // send DATA to table Paiment:
    const checkPaimentAndUpdate = await Paiment.findOneAndUpdate({ _id }, {
        CIN: idClient,
        Number_Appartement: idAppartement,
        Date,
        Montant,
        Statut_Payment
    })
    if (checkPaimentAndUpdate) {
        return res.status(200).json({ message: "Client et modifier avec succès !" });
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" });
    }
})

// method : DELETE 
// url : /payment/:id
// acces : Private - Admin
const DeletePaiment = asyncHandler(async (req, res) => {
    const paiment = await Paiment.findById(req.params.id);
    if (paiment) {
        await paiment.remove();
        return res.status(200).json({ message: "Paiement supprimé" })
    } else {
        return res.status(404).json({ message: "Paiements introuvables" })
    }
})

// method : GET 
// url : /payments
// acces : Private - Admin

const GetAllPaiments = asyncHandler(async (req, res) => {
    const paiments = await Paiment.find({}).populate("Number_Appartement").populate("CIN");
    if (paiments) {
        return res.status(200).json(paiments)
    } else {
        return res.status(404).json({ message: "Paiements introuvables" })
    }
})

// method : GET 
// url : /payment/:id
// acces : Private - Admin

const GetSinglePayment = asyncHandler(async (req, res) => {
    const paiment = await Paiment.findById(req.params.id)
    if (paiment) {
        return res.status(200).json(paiment)
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" })
    }
})

module.exports = {CreatePaiment , DeletePaiment , GetAllPaiments, UpdatePaiment,GetSinglePayment};