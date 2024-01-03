const Article = require('../models/Article.model')

exports.creer = async (req, res) => {
    try {
        var article = Article(req.body);

        var result = await article.save();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.afficherTout = async (req, res) => {
    try {
        const cat = await Article.find();

        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
exports.afficherUn = async (req, res) => {
    try {
        var n = await Article.findById(req.params.articleId).exec();
        res.status(200).json(n);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
exports.modifier = async (req, res) => {
    const { articleId } = req.params;
    console.log(articleId)
    const { name, price, image, description } = req.body;
    const Article1 = {
        name: name, price: price, image: image, description: description,
        _id: articleId
    };
    // console.log(Article1)
    await Article.findByIdAndUpdate(articleId, Article1);
    res.json(Article1);
    //         try 
    //         { 
    //         var n =  await Article.findById({ _id: req.params.articleId});
    //             n.name = req.body.name || "Updated name" ; 
    //             n.price=req.body.price || "Updated price" ; 
    //             n.image = req.body.image || "Updated image" ;
    //             n.description=req.body.description || "updated description" ;
    //              var result = await n.save();
    //              res.status(200).json(result);
    //              }
    //         catch (error){
    //                 res.status(400).json("unable to update the database");
    //           }
};
exports.supprimer = async (req, res) => {
    try {
        var result = await Article.deleteOne({ _id: req.params.articleId }).exec();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};
