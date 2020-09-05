const express = require('express');
const app = express();
let path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');
// server pe localhost:3000
app.listen(3000);

//css
app.use('/resurse', express.static('resurse'));
// rute
app.get('/index.ejs', (req, res) => {
    res.render(path.resolve('./views/index.ejs'), { title: 'Acasa' });
});
app.get('/categorii.ejs', (req, res) => {
    res.render(path.resolve('./views/categorii.ejs'), { title: 'Categorii' });
});
app.get('/contact.ejs', (req, res) => {
    res.render(path.resolve('./views/contact.ejs'), { title: 'Contact' });
});
app.get('/tt.ejs', (req, res) => {
    res.render(path.resolve('./views/tt.ejs'), { title: 'Termeni Tehnici' });
});
app.get('/break.ejs', (req, res) => {
    res.render(path.resolve('./views/break.ejs'), { title: 'Break' });
});
app.get('/cabriolet.ejs', (req, res) => {
    res.render(path.resolve('./views/cabriolet.ejs'), { title: 'Cabriolet' });
});
app.get('/hatchback.ejs', (req, res) => {
    res.render(path.resolve('./views/hatchback.ejs'), { title: 'Hatchback' });
});
app.get('/sedan.ejs', (req, res) => {
    res.render(path.resolve('./views/sedan.ejs'), { title: 'Sedan' });
});
app.get('/coupe.ejs', (req, res) => {
    res.render(path.resolve('./views/coupe.ejs'), { title: 'Coupe' });
});
app.get('/alfa-romeo-giulia-quadrifoglio.ejs', (req, res) => {
    res.render(path.resolve('./views/alfa-romeo-giulia-quadrifoglio.ejs'), { title: 'Masina' });
});

const masini = [
    {marca: 'Seat', model: 'Leon'},
    {marca: 'Dacia', model: 'Sandero'},
    {marca: 'Renault', model: 'Symbol'},
];
app.get('/create.ejs', (req, res) => {
    res.render('create', { title: 'Create', masini});
})

// 404
app.use((req, res) => {
    res.status(404).render('../views/404.ejs', { title: '404'});
})

