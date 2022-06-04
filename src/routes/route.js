const express = require('express');
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let movies = ['race','don','DDLG']
    console.log(movies)
   
    res.send('Hello there!')
});

router.get('/films', function(req, res){
    const films =  [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, { 
        "id": 4,
        "name": "Finding Nemo"
       }]
    res.send(films)
})

router.get('/movies/:indexNumber', function(req, res){
    let movies = ['Rang de basanti', 'The shining' , 'Lord of the rings',  'Batman begins']
    let displayMoive
    if(req.params.indexNumber < movies.length){
        displayMoive = movies[req.params.indexNumber]
    }else{
        displayMoive = "use a valid index number"
    }
    
    res.send({data:displayMoive})
})
router.get('/films', function(req,res){
    const films =  [ {
          "id": 1,
          "name": "The Shining"
         }, {
          "id": 2,
          "name": "Incendies"
         }, {
          "id": 3,
          "name": "Rang de Basanti"
         }, {
          "id": 4,
          "name": "Finding Nemo"
         }]
      res.send(films)      
  })
  
  router.get('/films/:filmId', function(req,res){
      const films =  [ {
          "id": 1,
          "name": "The Shining"
         }, {
          "id": 2,
          "name": "Incendies"
         }, {
          "id": 3,
          "name": "Rang de Basanti"
         }, {
          "id": 4,
          "name": "Finding Nemo"
         }]
      let displayingFilm
      if(req.params.filmId <= films.length && req.params.filmId != 0){
          for(index = 0; index< films.length; index++){
              if(req.params.filmId == films[index].id){
                  displayingFilm = films[index]
        
              }
          }
      }else{
          displayingFilm = "no film at this index"
      }
      
  
      res.send(displayingFilm)
  })


module.exports = router;
// adding this comment for no reason