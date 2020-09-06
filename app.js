const express = require('express');
const session = require('express-session');
const body = require('body-parser');
const app = express();
const fs = require('fs');
let path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');
// server pe localhost:3000
app.listen(3000);

// css
app.use('/resurse', express.static('resurse'));
app.use(express.urlencoded({ extended: true }));




// ------------ LOGIN / LOGOUT - SESIUNI ------------ //
const numeSesiune = 'xyz';

app.use(session({
    name: numeSesiune,
    resave: false,
    saveUninitialized: false,
    secret: 'salutbro',
    cookie: {
        maxAge: 1000 * 60 * 15 , // 15 min
        sameSite: true,

    }
}))

const users = [
    { id : 1, username: 'ady4k', parola: 'secreta'},
    { id : 2, username: 'admin', parola: 'admin'},
    { id : 3, username: 'test', parola: 'test123'}
]



app.post('/login', (req, res) => {
    const { username, parola } = req.body;
    if (username && parola) {
        console.log(username, parola);
        const user = users.find(user => user.username === username && user.parola === parola)

    if (user) {
        console.log(user);
        req.session.userId = user.id;
        return res.redirect('/index.ejs')
    }
    }
    res.redirect('/index.ejs')
})
app.get('/disconnect.ejs', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            res.redirect('home')
        }
        res.clearCookie(numeSesiune)
        res.redirect('/index.ejs')
    })
})
// ------------ LOGIN / LOGOUT - SESIUNI ------------ //





// rute
app.get('/index.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/index.ejs'), { title: 'Acasa' , userId});
});
app.get('/categorii.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/categorii.ejs'), { title: 'Categorii', userId });
});
app.get('/contact.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/contact.ejs'), { title: 'Contact', userId });
});
app.get('/tt.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/tt.ejs'), { title: 'Termeni Tehnici', userId });
});
app.get('/break.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/break.ejs'), { title: 'Break', userId });
});
app.get('/cabriolet.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/cabriolet.ejs'), { title: 'Cabriolet', userId });
});
app.get('/hatchback.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/hatchback.ejs'), { title: 'Hatchback', userId });
});
app.get('/sedan.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/sedan.ejs'), { title: 'Sedan', userId });
});
app.get('/coupe.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/coupe.ejs'), { title: 'Coupe', userId });
});
app.get('/alfa-romeo-giulia-quadrifoglio.ejs', (req, res) => {
    const { userId } = req.session;
    res.render(path.resolve('./views/alfa-romeo-giulia-quadrifoglio.ejs'), { title: 'Masina', userId });
});

// CREATE FORMULAR

app.post('/create.ejs', (req, res) => {

    masini.push(req.body);
    res.redirect('/create.ejs');
})

//
var masini = [];
// create.ejs
app.get('/create.ejs', (req, res) => {
    const { userId } = req.session;
    res.render('create', { title: 'Create', masini, userId});
})

// 404
app.use((req, res) => {
    const { userId } = req.session;
    res.status(404).render('../views/404.ejs', { title: '404', userId});
})



