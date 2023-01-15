const asyncHandler = require('express-async-handler');
const Client = require('../models/ClientModel');


// method : POST 
// url : /client
// acces : Private - Admin

const CreateClient = asyncHandler(async (req, res) => {
    const { First_Name, Last_Name, CIN, Email, Phone, Number_Appartement } = req.body;
    if (!First_Name || !Last_Name || !CIN || !Email || !Phone || !Number_Appartement) {
        return res.status(400).json({ message: "Merci de compléter tous les champs !" })
    }
    // check for CIN if already exist
    const ClientExists = await Client.findOne({ CIN });
    if (ClientExists) {
        return res.status(400).json({ message: "Client déjà existant" });
    }
    // Create Client :
    const client = await Client.create({
        First_Name,
        Last_Name,
        CIN,
        Email,
        Phone,
        Number_Appartement
    });
    if (client) {
        return res.status(200).json({ message: "Client créé avec succès !" });
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" });
    }
});

// method : PUT 
// url : /client
// acces : Private - Admin

const UpdateClient = asyncHandler(async (req, res) => {
    const { First_Name, Last_Name, CIN, Email, Phone, Number_Appartement } = req.body;
    const _id = req.params.id;
    if (!First_Name || !Last_Name || !CIN || !Email || !Phone || !Number_Appartement) {
        return res.status(400).json({ message: "Merci de compléter tous les champs !" })
    }
    // check for CIN if already exist
    const CheckClientAndUpdate = await Client.findOneAndUpdate({ _id },
        {
            First_Name,
            Last_Name,
            CIN,
            Email,
            Phone,
            Number_Appartement
        });
    if (CheckClientAndUpdate) {
        return res.status(200).json({ message: "Client mis à jour avec succès !" });
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard ! Je vous remercie" });
    }
});

// method : DELETE 
// url : /client/:id
// acces : Private - Admin

const DeleteClient = asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const CheckClientAndDelete = await Client.findOneAndDelete({ _id });
    if (CheckClientAndDelete) {
        return res.status(200).json({ message: "Client supprimé avec succès !" });
    } else {
        return res.status(400).json({ message: "Erreur veuillez réessayer plus tard !" });
    }
});

// method : GET 
// url : /clients
// acces : Private - Admin

const GetAllClient = asyncHandler(async (req, res) => {
    const getAllClientIfExist = await Client.find({});
    if (getAllClientIfExist) {
        return res.status(200).json(getAllClientIfExist);
    } else {
        return res.status(400).json({ message: "Aucun client Données fondées !!" });
    }
});

// method : GET 
// url : /client/:id
// acces : Private - Admin

const getSingleClient = asyncHandler(async(req,res) => {
    const client = await Client.findById(req.params.id)
    if(client){
       return res.status(200).json(client)
    } else {
        return res.status(400).json({message: "Ce client n'est pas TROUVÉ !!"})
    }
})

module.exports = {CreateClient , UpdateClient , DeleteClient , GetAllClient , getSingleClient};