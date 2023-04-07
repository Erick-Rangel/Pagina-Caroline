const express = require('express');
const menu = require('../models/menu');
const router = express.Router();

// Ruta para obtener todos los menús
router.get('/', async (req, res) => {
    try{
const menus = await menu.find()
        res.send(menus);
    }
    catch{(err) => {
        console.log(err)
    }
}
})


// Ruta para crear un nuevo menú
router.post('/', async (req, res) => {
    try{
        const newMenu = new menu(req.body);
        await newMenu.save();
        res.send(newMenu);
    }
    catch{(err) => {
        console.log(err)
    }
}
})

// Ruta para obtener un menú por ID
router.get('/:id',async (req, res) => {
    try{
    const menuId = req.params.id;
    const menu = await menu.findById(menuId);
    res.send(menu);
    }
    catch{(err) => {
        console.log(err)
    }
}
});

// Ruta para actualizar un menú por ID
router.put('/:id',async (req, res) => {
    try{
    const menuId = req.params.id;
    }
    catch{(err) => {
        console.log(err)
    }
    }
});


// Ruta para eliminar un menú por ID
router.delete('/:id', (req, res) => {
    const menuId = req.params.id;
    res.send(`Eliminando el menú con ID ${menuId}`);
});

module.exports = router;