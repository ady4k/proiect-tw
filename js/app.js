const express = require('express');
const app = express();
let path = require('path');
app.listen(3000);

app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve('../views/index.html'));
});
app.get('/categorii.html', (req, res) => {
    res.sendFile(path.resolve('../views/categorii.html'));
});
app.get('/contact.html', (req, res) => {
    res.sendFile(path.resolve('../views/contact.html'));
});
app.get('/tt.html', (req, res) => {
    res.sendFile(path.resolve('../views/tt.html'));
});
app.get('/categorii/break.html', (req, res) => {
    res.sendFile(path.resolve('../views/categorii/break.html'));
});
app.get('/categorii/cabriolet.html', (req, res) => {
    res.sendFile(path.resolve('../views/categorii/cabriolet.html'));
});
app.get('/categorii/hatchback.html', (req, res) => {
    res.sendFile(path.resolve('../views/categorii/hatchback.html'));
});
app.get('/categorii/sedan.html', (req, res) => {
    res.sendFile(path.resolve('../views/categorii/sedan.html'));
});
app.get('/categorii/coupe.html', (req, res) => {
    res.sendFile(path.resolve('../views/categorii/coupe.html'));
});
app.get('/categorii/sedan/alfa-romeo-giulia-quadrifoglio.html', (req, res) => {
    res.sendFile(path.resolve('../views/categorii/sedan/alfa-romeo-giulia-quadrifoglio.html'));
});


