const express = require('express');
const router = express.Router();
const order = require('../models/order')

// Ruta para obtener todas las órdenes
router.get('/', async (req, res) => {
    try{
        const orders = await order.find()
        res.send(orders);
    }
    catch{(err) => {
        console.log(err)
    }
    }
});

// Ruta para crear una nueva orden
router.post('/',async (req, res) => {
    try{
        const newOrder = new order(req.body);
        await newOrder.save();
        res.send(newOrder);
    }
    catch{(err) => {
        console.log(err)
    }
    }
});

// Ruta para obtener una orden por ID
router.get('/:id', async(req, res) => {
    try{
    const orderId = req.params.id;
        const menu =  await order.findById(orderId);
        res.send(menu);
    }
    catch{(err) => {
        console.log(err)
    }
}
});

// Ruta para actualizar una orden por ID
router.put('/:id', (req, res) => {
    const orderId = req.params.id;
    res.send(`Actualizando la orden con ID ${orderId}`);
});

// Ruta para eliminar una orden por ID
router.delete('/:id', (req, res) => {
    const orderId = req.params.id;
    res.send(`Eliminando la orden con ID ${orderId}`);
});

module.exports = router;