const PUBLISHABLE_KEY = "pk_test_51L0vISCqBdY06N8pzzSH4OFcSXUiKd74EI1VVg9P8jIJJhEy3TD6IY3DWj3lxji5sm5qEH0KyvsYNL7GublaCv8m00LeTS4Rrp";
const SECRET_KEY = "sk_test_51L0vISCqBdY06N8pXhDaIiTSexhlbznw5nNodB2pOd9tNjFOa4tXuFSsDauZH420iqgYrInERCKVfL2b6EoOUbXO00JI3vA6zO";
var Stripe =require('stripe')
//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');
app.use(cors());
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// Configurer la base de données
/*const dbConfig = require('./Config/database.Config.js');*/
const mongoose = require('mongoose');
const { Server } = require('mongodb');
// var loginRoutes = require("./routes/authentification")
// app.use('/api/auth', loginRoutes);
const userRouter = require('./routes/user');
const User = require('./models/user');
/* Si on veut utiliser mongoose dans différents emplacements il doit être vu
en mode global : */
mongoose.Promise = global.Promise;
app.use(express.json());
app.use(userRouter);

app.post("/create-payment-intent/:amount", async (req, res) => {
  try {
    const {amount} = req.params
    console.log(amount)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount*100, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });
    
    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  }

  catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
// Connexion à la base de données
/*mongoose.connect(dbConfig.url,{
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
    }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
    });
app.get('/', (req, res) =>{ 
    res.json({"message":"Welcome"});  
});*/
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.json({ "message": "Welcome" });
});
require('./routes/client.routes.js')(app);
require('./routes/Bond.routes.js')(app);
require('./routes/devis.routes.js')(app);
require('./routes/facture.routes.js')(app);
require('./routes/Article.routes.js')(app);
app.listen(3006, () => { console.log("Node server is running..") });