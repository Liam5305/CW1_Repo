const express = require('express');
const path = require('path');
const router = require('./routes/plannerRoutes');
const mustache = require('mustache-express');

const app = express();
const public = path.join(__dirname, 'public');
app.use(express.static(public));
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', router);

app.use(function(req, res) {
    res.status(404);
    return res.send('Oops! We didn/t find what you are looking for.');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})