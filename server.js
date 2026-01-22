const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//Servir la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

//Ruta home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Ruta Ríos
app.get('/rios', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rios.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});