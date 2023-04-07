const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Configurar la conexión a la base de datos
mongoose.connect('mongodb+srv://bankforyou:ExxJQ0oTvv6V9oAu@cluster0.xbgrapj.mongodb.net/apimenu',  
    { useNewUrlParser: true, useUnifiedTopology: true });

// Crear una instancia de la aplicación Express
const app = express();
const port = 3000;

// Configurar body-parser para parsear el cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas para las órdenes
const orderRouter = require('./routes/orders');
app.use('/api/orders', orderRouter);

// Rutas para los menús
const menuRouter = require('./routes/menus');
app.use('/api/menus', menuRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


// Exporta una función que Lambda pueda invocar
exports.handler = async (event, context) => {
    // Configura el objeto de evento de Lambda como petición HTTP
    const request = {
        method: event.httpMethod,
        url: event.path,
        headers: event.headers,
        body: event.body,
        query: event.queryStringParameters,
        params: event.pathParameters
    };

    // Resuelve la petición utilizando la aplicación Express
    const response = await app(request, {});

    // Configura la respuesta de Lambda como una respuesta HTTP
    return {
        statusCode: response.statusCode,
        headers: response.headers,
        body: response.body
    };
};

//usar los modelos de la base
