require('dotenv').config();


const express = require('express')
const cors = require('cors');

const mongoose = require('mongoose');
const filmController = require('../controllers/filme'); 

const app = express()
app.use(express.json());
app.use(cors());


app.get('/', filmController.getAllFilms)
app.post('/', filmController.createFilm)
app.get('/:id', filmController.getFilmById)
app.delete('/:id', filmController.deleteFilm)
app.put('/:id', filmController.updatedFilm)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  mongoose.connect(`mongodb+srv://gabrielspessanha:${process.env.PASSWORD_MONGODB}@ghibli-api.3avwhn4.mongodb.net/?retryWrites=true&w=majority`)

  console.log('Servidor rodando na porta '+ PORT)
})


