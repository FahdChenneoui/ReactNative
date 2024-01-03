const Devis =require('../models/Devis.models.js')
const router=require("express").Router() ;
const body=require("body-parser") ;
exports.creer= async (req, res) => { 
    try {
         var devis= Devis(req.body);
         
            var result=await devis.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = async(req, res) => {
    try{
        var result = await Devis.find().populate('Client');
        res.send(result);
    }
    catch(error) {
        res.status(500).send(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Devis.findById(req.params.devisId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Devis.findById({ _id: req.params.devisId});
            n.clNometprenom = req.body.clNometprenom || "Updated clNometprenom" ; 
            n.clSoc=req.body.clSoc || "Updated Sociéte";
            n.date = req.body.mail || "Updated date" ;
            n.catFis=req.body.date || "updated catFis" ;
            n.prix=req.body.tel || "updated prix" ;
            n.remise = req.body.remise || "Updated remise" ;
             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Devis.deleteOne({_id: req.params.devisId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};