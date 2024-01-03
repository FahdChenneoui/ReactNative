const BondC =require('../models/Bond.models.js')
const router=require("express").Router() ;
const body=require("body-parser") ;
exports.creer= async (req, res) => { 
    try {
         var bondc= BondC(req.body);
         
            var result=await bondc.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).json(error);
            }
};


exports.afficherTout = async(req, res) => {
    try{
        var result = await BondC.find();
        res.json(result);
    }
    catch(error) {
        res.status(500).json(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await BondC.findById(req.params.bondcId).exec();
        var result = await n.save();
        res.json(result);
    } catch (error) {
    res.status(500).json(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await BondC.findById({ _id: req.params.bondcId});
            n.NUMDeCommande = req.body.NUMDeCommande || "Updated NUmDeCommande" ; 
            n.clSoc=req.body.clPays || "Updated Sociéte";
            n.email = req.body.mail || "Updated mail" ;
            n.date=req.body.date || "updated date" ;
            n.prix=req.body.tel || "updated prix" ;
            n.catFis = req.body.catFis || "Updated catFis" ;
            n.remise = req.body.remise || "Updated remise" ;
             var result = await n.save();
            res.json(result);
             }
        catch (error){
                res.status(400).json("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await BondC.deleteOne({_id: req.params.bondcId}).exec();
        res.json(result);
    } catch (error) {
    res.status(500).json(error);
    }
};