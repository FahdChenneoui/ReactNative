// import express from 'express';
// const router = express.Router();
// import stripe from 'stripe';
// const Stripe = stripe('sk_test_51L0vISCqBdY06N8pXhDaIiTSexhlbznw5nNodB2pOd9tNjFOa4tXuFSsDauZH420iqgYrInERCKVfL2b6EoOUbXO00JI3vA6zO')
// router.post('/', async (req, res) => {
//     console.log(req.body)
//     let status, error;
//     const { token, amount } = req.body;
//     try {
//         await Stripe.charges.create({
//             source: token.id,
//             amount,
//             currency: 'usd',
//         });
//         status = 'success';
//     } catch (error) {
//         console.log(error);
//         status = 'Failure';
//     }
//     res.json({ error, status });
// });
// export default router; 
