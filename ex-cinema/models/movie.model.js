const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: {
    type: [String]
  },
  image: {
    type: String
  },
  description: {
    type: String,
    min: 10,
    max: 1000,
    required: true
  },
  showtimes: {
    type: [String]
  }
}, {timestamps:true});


const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;