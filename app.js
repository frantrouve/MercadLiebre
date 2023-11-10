const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Servidor corriendo'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/register.html'));
});

app.post('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/login.html'));
});

app.post('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/login.html'));
});