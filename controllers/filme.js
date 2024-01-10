const Film  = require('../models/film')


async function getAllFilms(req, res){
  try {
    const films = await Film.find()
    return res.status(200).json(films)
  }catch (error){
    console.error('Erro ao Buscar filmes: ', error)
    return res.status(500).json({error: 'Erro interno do servidor'})
  }
}

async function getFilmById(req, res){
  try{

    const film = await Film.findById(req.params.id)
    return res.status(200).json(film)
  }catch(error){
    console.error('Erro ao Buscar filme: ', error)
    return res.status(422).json({ error: 'Erro interno do servidor'})
  }
}

async function deleteFilm(req, res){
  try{
    const film = await Film.findByIdAndDelete(req.params.id)
    return res.send(film)
  }catch (error){
    console.error('Erro ao excluir film: ', error)
    return res.status(500).json({error: 'Erro interno do servidor'})
  }
}

async function updatedFilm(req,res){
  
  const {name, description, image_url, trailer_url} = req.body
  const id = req.params.id

  try{
    if(!Object.entries(req.body).length){
      res.status(400).json({error: 'Tá faltando informação'})
      return 
    }

    await Film.findByIdAndUpdate( 
      id , {
      $set :{
        name,
        description,
        image_url,
        trailer_url,
      }
    },{
      upsert: true,
      new: true
    })

    return res.status(202).end()
  }catch (error){
    console.error('Erro ao atualizar filme: ', error)
    return res.status(400).json({error: 'Erro ao atualizar o filme'})
  }
}

async function createFilm(req, res){

  const {name, description, image_url, trailer_url} = req.body

  try{
    const film = new Film({
      name,
      description,
      image_url,
      trailer_url,
    })
  
    await film.save()
    return res.send(film)
  }catch( error){
    console.error('Erro ao criar o filme:',  error)
    return res.status(500).json({error: 'Erro interno do servidor'})
  }
}

module.exports = {
  getAllFilms,
  getFilmById,
  deleteFilm,
  updatedFilm,
  createFilm
}