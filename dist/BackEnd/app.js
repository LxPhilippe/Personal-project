const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
mongoose.connect('mongodb+srv://.ydqp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/FrontEnd/index.html'));
});
module.exports = app;