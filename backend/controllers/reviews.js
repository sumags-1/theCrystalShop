// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const db = require('../models');
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple')
const config = require('../config/config')

// function isAuthenticated(req, res, next) {
// 	if (req.headers.authorization) {
// 		const token = req.headers.authorization
// 		const decoded = jwt.decode(token, config.jwtSecret)
// 		const foundUser = db.User.findById(decoded.id)
// 		if (foundUser.admin) {
// 			next()
// 		} else {
// 			res.sendStatus(401)
// 		}
// 	}
// }

// // Index Route (SHOW ALL Reviews for ALL crystals and ALL users): 
// router.get('/', (req, res) => {
// 	db.Crystal.find(
// 		{},
// 		{ reviews: true, _id: false },
// 		(err, crystals) => {
// 			// format query results to appear in one array, 
// 			// rather than an array of objects containing arrays 
// 			const flatList = []
// 			for (let crystal of crystals) {
// 				flatList.push(...crystal.reviews)
// 			}
// 			res.json(flatList)
// 		}
// 	)
// });


// Index Route (All Reviews by a specified crystal):

router.get('/crystal/:id', (req, res) => {
	db.Crystal.findById(
		req.params.id,
		{ name: true, reviews: true, _id: false },
		(err, crystal) => {
			res.json(crystal)
		}
	)
});


// Destroy Route: DELETE localhost:3000/reviews/:id
router.delete('/:id', (req, res) => {
	db.Crystal.findOneAndUpdate(
		{ 'reviews._id': req.params.id },
		{
			$pull: {
				reviews: { _id: req.params.id }
			}
		},
		{ new: true },
		(err, crystal) => {
			res.json(crystal)
		})
});

module.exports = router;