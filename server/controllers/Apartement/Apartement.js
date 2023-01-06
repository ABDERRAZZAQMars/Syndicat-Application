const Appartement = require('../Models/AppartementModel')

// function getAllAppartement Appartement : 
// method : GET
// url : /appartement/getallappartement
// acces : private
exports.getAllAppartement = async (req, res) => {
    try {
        const data = await Appartement.findAll({});

        console.log(data);

        res.send(data).status(200)
    }
    catch (error) {
        console.log(error);
        res.status(400).send({ message: "Appartement is not founded" })
    }
};


// functioncreat Create Appartement : 
// method : GET
// url : /appartement/createappartement
// acces : private
exports.createAppartement = async (req, res) => {
    const { residence, namberDappartement } = req.body;
    if (!residence || !namberDappartement) {
        res.status(400)
            .json({ message: "please fill all fields !" })
    }

    const checkAppartementNumber = await Appartement.findOne({ namberDappartement: req.body.namberDappartement })
    if (checkAppartementNumber) {
        res.json({ message: " i m sorry Appartement has been already exist " })
    }

    // Create Appartement :
    const appartement = await Appartement.create({
        residence,
        namberDappartement
    })
    if (appartement) {
        res.status(200)
            .json({ message: "Appartement Created Successfully !" })
    }
}

// function Delete Appartement : 
// method : DELETE
// url : /appartement/deleteappartement/:id_apartement
// acces : private
try {
    exports.deleteAppartement = async (req, res) => {
        const id_Apartment = req.params.id_Apartment;
        const data = await Appartement.remove({
            where: {
                id_Apartment: id_Apartment,
            },
        });
        res.status(200).json({
            success: true,
            message: "Appartement deleted successfully",
            data: data,
        });
    };
} catch (error) {
    console.log(err);
}


//Function update Appartement:
// method : PUT
// url : /appartement/updateappartement/:id_apartement
// acces : private
exports.updateAppartement = async (req, res) => {
    const { residence, namberDappartement } = req.body;
    const _id = req.params.id;
    if (!residence || !namberDappartement) {
        res.status(400).json({ message: "please fill all fields !" });
    }
    // check for number if already exist
    const CheckAppartementUpdate = await Appartement
        .findOneAndUpdate({ _id, residence, namberDappartement });
    if (CheckAppartementUpdate) {
        res.status(200).json({ message: "Appartement Updated Successfully !" });
    } else {
        res.status(400).json({ message: "Error  try again" });
    }
};
