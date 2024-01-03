const Client = require('../models/client.models.js')

exports.creer = async (req, res) => {
    try {
        var client = Client(req.body);

        var result = await client.save();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.afficherTout = async (req, res) => {
    try {
        const cat = await Client.find();

        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
exports.afficherUn = async (req, res) => {
    try {
        var n = await Client.findById(req.params.clientId).exec();
        res.status(200).json(n);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
exports.modifier = async (req, res) => {

    const { clientId } = req.params;
    console.log(clientId)
    const { clNometprenom, clMail, clSoc} = req.body;
    const client1 = { clNometprenom: clNometprenom, clMail: clMail,clSoc: clSoc, _id: clientId };
    console.log(client1)
    await Client.findByIdAndUpdate(clientId, client1);

    res.json(client1);
    //         try 
    //         { 
    //         var n =  await Client.findByIdAndUpdate(req.params.clientId);
    //             n.clNometprenom = req.body.clNometprenom || "Updated nom" ; 
    //             // n.clCin=req.body.clCin || "Updated Cin" ; 
    //             // n.cletat = req.body.cletat || "Updated etat" ;
    //             // n.clDate=req.body.clDate || "updated Date" ;
    //             n.clMail = req.body.clMail || "Updated mail" ;
    //             // n.clTel = req.body.clTel || "Updated tel";
    //             n.clSoc=req.body.clSoc || "Updated Sociéte";
    //             // n.clVille=req.body.clVille || "Updated Ville";
    //            console.log(req.params)
    //              var result = await n.save();
    //              res.status(200).json(result);
    //              }
    //         catch (error){
    //                 res.status(400).json("unable to update the database");
    //           }
};






exports.supprimer = async (req, res) => {
    try {
        var result = await Client.deleteOne({ _id: req.params.clientId }).exec();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};
