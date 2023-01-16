const asyncHandler = require('express-async-handler');
const Appartement = require('../models/AppartementModel');

// method : POST 
// url : /appartement
// acces : Private - Admin

const CreateAppartement = asyncHandler(async (req, res) => {
    const { Name_Immeuble, Number_Appartement} = req.body;
    if (!Name_Immeuble || !Number_Appartement ) {
        return res.status(400).json({ message: "Merci de compléter tous les champs !" })
    }

    const checkNumberAppartement = await Appartement.findOne({ Number_Appartement: req.body.Number_Appartement })
    if (checkNumberAppartement) {
        return res.status(200).json({ message: "Appartement déjà existant" })
    }
    // Create Appartement :
    const appartement = await Appartement.create({
        Name_Immeuble,
        Number_Appartement
    })
    if (appartement) {
        return res.status(200).json({ message: "Appartement créé avec succès !" })
    }
})

// method : DELETE 
// url : /appartement/:id
// acces : Private - Admin

const DeleteAppartement = asyncHandler(async (req, res) => {
    const appartement = await Appartement.findById(req.params.id)
    if (appartement) {
        await appartement.remove()
        return res.status(200).json({ message: 'Appartement supprimé' })
    } else {
        return res.status(404).json({ message: "Appartement introuvable" })
    }
})

// method : PUT 
// url : /appartement/:id
// acces : Private - Admin

const UpdateAppartement = asyncHandler(async (req, res) => {
    const { Name_Immeuble, Number_Appartement } = req.body;
    const _id = req.params.id;

    if (!Name_Immeuble || !Number_Appartement) {
        return res.status(400).json({ message: "please fill all fields !" })
    }

    const checkAppartementAndUpdate = await Appartement.findOneAndUpdate({ _id }, {
        Name_Immeuble,
        Number_Appartement
    })

    if (checkAppartementAndUpdate) {
        return res.status(200).json({ message: "Appartement mis à jour avec succès !" })
    }
    else { return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" }) }
})

// method : GET 
// url : /appartements
// acces : Private - Admin

const GetAllAppartement = asyncHandler(async (req, res) => {
    const appartements = await Appartement.find({})
    if (appartements) {
        return res.status(200).json(appartements)
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" })
    }
})

// method : GET 
// url : /appartement/:id
// acces : Private - Admin

const GetSingleAppartement = asyncHandler(async (req, res) => {
    const appartement = await Appartement.findById(req.params.id)
    if (appartement) {
        return res.status(200).json(appartement)
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" })
    }
})

module.exports = { CreateAppartement, DeleteAppartement, UpdateAppartement, GetAllAppartement, GetSingleAppartement };