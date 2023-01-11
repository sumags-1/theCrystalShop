// dependencies
const mongoose = require("mongoose");
const reviewSchema = require("./review");
const Schema = mongoose.Schema;

const trailSchema = new Schema(
    {
        name: { type: String, required: true },
        origin: { type: String},
        size: { type: String, required: true },
        shape: { type: String, required: true },
        description: { type: String },
        surface: { type: String, enum:['polished', 'raw', 'jewelry']},
        jewelry_category: { type: String, enum: ['bracelet', 'earring', 'pendant'] },
        intentions: { type: String },
        chakra: { type: String, enum: ['root', 'sacral', 'solar plexus', 'heart', 'throat', 'third eye', 'crown'], required: true},
        zodiac: { type: String, enum: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'], required: true },
        element: {type: String, enum: ['fire', 'earth', 'air', 'water']},
        image: { type: String, default: '/assets/hikers_hub_logo.png' },
        reviews: [reviewSchema]
    }
)

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail

name, image, origin, size, shape, surface (polished, raw), 
category(jewelry, raw, polished), intentions, chakra, zodiac, element, 
review_id (linked from reviews)
