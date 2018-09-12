const express      = require('express');
const router       = express.Router();
// const Celebrity    = require('../models/Celebrity')




/* GET home page */
axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        $('.characters-container').empty();

          response.data.forEach((character)=>{
            console.log(character)
            let charInfo = `
            <div class="character-info">
            <div class="name"> Name:  ${character.name} </div>
            <div class="occupation"> Occupation: ${character.occupation} </div>
            <div class="weapon"> Weapon: ${character.weapon} </div>
            </div>
            `;

            $('.characters-container').append(charInfo)
        })
    })




router.get('/characters/new', (req, res, next)=>{
    res.render('charactersViews/create');
});





// router.post('/celebrities/create', (req, res, next)=>{

//     Celebrity.create({
//         name: req.body.name,
//         occupation: req.body.occupation,
//         catchphrase: req.body.catchphrase
//     })
//     .then((response)=>{
//         res.redirect('/celebrities')
//     })
//     .catch((err)=>{
//         next(err);
//     })

// });


// router.post('/celebrities/delete/:id', (req, res, next)=>{

//     Celebrity.findByIdAndRemove(req.params.id)
//     .then((response)=>{
//         res.redirect('/celebrities')
//     })
//     .catch((err)=>{
//         next(err)
//     })

// })


// router.get('/celebrities/edit/:celebrityID', (req, res, next)=>{
//     Celebrity.findById(req.params.celebrityID)
//     .then((theCeleb)=>{
//         res.render('celebrityViews/edit', {  theCelebrity : theCeleb  });
//     })
//     .catch((err)=>{
//         next(err);
//     })

// })


// router.post('/celebrities/update/:celebrityID', (req, res, next)=>{

//     Celebrity.findByIdAndUpdate(req.params.celebrityID, {
//         name: req.body.name,
//         occupation: req.body.occupation,
//         catchphrase: req.body.catchphrase
//     })
//     .then((response)=>{
//         res.redirect('/celebrities/'+req.params.celebrityID)
//     })
//     .catch((err)=>{
//         next(err)
//     })


// })







// router.get('/celebrities/:theid', (req, res, next)=>{
//     Celebrity.findById(req.params.theid).populate('movies')
//     .then((theCelebrity)=>{
//         res.render('celebrityViews/show', {celeb: theCelebrity})
//     })
//     .catch((err)=>{
//         next(err);
//     });
// });









module.exports = router;