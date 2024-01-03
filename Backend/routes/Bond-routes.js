// let mongoose = require('mongoose'),
//   express = require('express'),
//   router = express.Router();

// // Bond Model
// let bondcSchema = require('../models/Bond.models');

// // CREATE Bond
// router.route('/create-Bond').post((req, res, next) => {
//   bondcSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       console.log(data)
//       res.json(data)
//     }
//   })
// });

// // READ BOND
// router.route('/').get((req, res) => {
//   bondcSchema.find((error, data) => {
//     if (error) {
//       // eslint-disable-next-line no-undef
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Get Single Bond
// router.route('/edit-Bond/:id').get((req, res) => {
//   bondcSchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       // eslint-disable-next-line no-undef
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// // Update Bond
// router.route('/update-Bond/:id').put((req, res, next) => {
//   bondcSchema.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Bond updated successfully !')
//     }
//   })
// })

// // Delete Bond
// router.route('/delete-Bond/:id').delete((req, res, next) => {
//   bondcSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

// module.exports = router;