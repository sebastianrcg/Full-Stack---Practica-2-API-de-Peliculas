const express = require('express');

const cors = require('cors');

const peliculasRoutes = require('./routes/peliculas.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/peliculas', peliculasRoutes);
// Ruta de prueba
app.get('/',
    (req, res) => {
        res.send('API de Películas funcionando 🎬');
    });

module.exports = app;