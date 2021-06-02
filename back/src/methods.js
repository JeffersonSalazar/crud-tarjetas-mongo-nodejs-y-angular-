let structure = require('./structure');

let express = require('express'),
    router = express.Router();

// metodo para obtener los datos de la DB 
router.get('/', async (req, res) => {
    let getPets = await structure.find();

    res.json(getPets);
});

// metodo eliminar
router.delete('/:id', async (req, res) => {
    let { id } = req.params;
    await structure.findByIdAndRemove(id);

    res.json('date delete');
});

// metodo para obtener por id
router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let getPetId = await structure.findById(id);

    res.json(getPetId);
});

// metodo para agregar
router.post('/', async (req, res) => {
    let   newPets = new structure (req.body);
    await newPets.save();

    res.json('date created');
});

//  metodo para actualizar
router.put('/:id', async (req, res) => {
    let { id } = req.params;
    let newPet = req.body;
    
    await structure.findByIdAndUpdate(id, newPet);

    res.json('date update');
});

module.exports = router;