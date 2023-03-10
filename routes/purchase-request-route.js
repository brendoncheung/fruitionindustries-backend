const express = require('express');
const router = express.Router();
const Joi = require('joi');
const mongoose = require('mongoose');
const PurchaseRequest = require('../model/purchase-request')

router.get('/', async (req, res) => {
  const results = await 
    PurchaseRequest
    .find()
    .sort({isEmergency: 1});

  res.send(results);
})

router.post('/', async (req, res) => {
    const { error } = validation(req.body);
    if(error) return res.status(400).send("Fruition backend error message: " + error.message)

    const p = new PurchaseRequest(req.body)

    await p.save()

    res.send(p)
})

function validation(request) {
    const schema = Joi.object({
        isEmergency: Joi.boolean(),
        quantity: Joi.number().min(1).required(),
        description: Joi.string().required(),
        manufacturer: Joi.string().required(),
        fruitionPn: Joi.string().optional(),
        requestDate: Joi.date().required(),
        catagory: Joi.string().valid('Engineering', 'Shortage', 'Tooling', 'Supply', 'PPAP', 'Misc', 'Equipment'),
        createdBy: Joi.object({
          firstname: Joi.string(),
          lastname: Joi.string()
        })
    })

    return schema.validate(request)
}

module.exports = router;









// const connectionString = 'mongodb://localhost/vidly'

// mongoose.connect(connectionString, (err) => {
//   if(!err) console.log('connected')
// })

// router.get('/', async (req, res) => {
//   const result = await Genre
//   .find()
//   .sort('name')
//   res.send(result);
// });

// router.post('/', async (req, res) => { // adding genre
//   const {error} = validateGenre(req.body); 
//   if (error) return res.status(400).send("=========" + error.details[0].message);

//   const g = new Genre({
//     name: req.body.name
//   })

//   // mongoose validation

//   try {
//     await g.save()
//     res.send(g)
    
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// });

// router.put('/:id', async (req, res) => { // update genre

//   // validate body
//   if(!validateGenre(req.body)) return res.status(400).send("id is missing")

//   // find if id exists
//   const g = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name})
//   if(!g) return res.status(400).send('id was not found')

//   // if found
//   g.name = req.body.name
//   await g.save();
//   res.send(g);
// });

// router.delete('/:id', async(req, res) => { // delete a genre
//   const genre = await Genre.findByIdAndRemove(req.params.id);
//   if (!genre) return res.status(404).send("id does not exist")
//   res.send(genre);
// });

// router.get('/:id', async (req, res) => { // get a genre by id
//   const g = await Genre.findById(req.params.id)
//   if(!g) return res.status(400).send("id was not found")
//   res.send(g)
// });

// function validateGenre(genre) {
//   const schema = Joi.object().keys({
//     name: Joi.string().min(3).required()
//   });

//   return Joi.validate(genre, schema);
// }





