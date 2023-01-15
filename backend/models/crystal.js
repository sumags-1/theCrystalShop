// dependencies
const mongoose = require("mongoose");
const reviewSchema = require("./review");
const Schema = mongoose.Schema;

const crystalSchema = new Schema(
    {
        name: { type: String, required: true },
        origin: { type: String },
        size: { type: String, required: true },
        shape: { type: String, required: true },
        description: { type: String },
        surface: { type: String, enum: ['Polished', 'Raw', 'Jewelry'] },
        jewelry_category: { type: String, enum: ['Bracelet', 'Earrings', 'Pendant', 'None'] },
        intentions: { type: String },
        chakra: { type: String, enum: ['Root', 'Sacral', 'Solar Plexus', 'Heart', 'Throat', 'Third eye', 'Crown'], required: true },
        zodiac: { type: String, enum: ['All signs', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'] },
        element: { type: String, enum: ['Fire', 'Earth', 'Air', 'Water'] },
        price: { type: String },
        image: { type: String, default: '/assets/nb_logo.png' },
        reviews: [reviewSchema]
    }
)

const Crystal = mongoose.model("Crystal", crystalSchema);

module.exports = Crystal
