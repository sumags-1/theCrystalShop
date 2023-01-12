// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const db = require('../models');
const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple')
const config = require('../config/config')

//index route
router.get('/', async (req, res) => {
    const allCrystals = await db.Crystal.find({});
    res.json(allCrystals);
});

// Create Route 
router.post('/', async (req, res) => {
    const createCrystal = await db.Crystal.create(req.body);
    res.json(createCrystal);
});

//Show Route
router.get('/:id', async (req, res) => {
    const crystal = await db.Crystal.findById(req.params.id);
    res.json(crystal);
});

// Delete Route 
router.delete('/:id', async (req, res) => {
    await db.Crystal.findByIdAndDelete(req.params.id);
    res.json({ status: 200 });
});

// Edit Route
router.get('/:id', async (req, res) => {
    const crystal = await db.Crystal.findById(req.params.id);
    console.log(crystal._id)
    res.json(crystal);
});

// Update Route 
router.put('/:id', async (req, res) => {
    const updatedCrystal = await db.Crystal.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedCrystal);
});


// // Create Review Route
router.put('/:id/review', async (req, res) => {
    const crystal_review = await db.Crystal.findByIdAndUpdate(
        req.params.id,
        { $push: { reviews: req.body } },
        { new: true }
    )
    res.json(crystal_review)

});

module.exports = router;
