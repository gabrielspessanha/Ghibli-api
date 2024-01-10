const mongoose = require('mongoose');

const FilmSchema = mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  image_url: {type: String, required: true},
  trailer_url: {type: String, required: true}
})
 
 const Film = mongoose.model('Film', FilmSchema)

module.exports = Film 