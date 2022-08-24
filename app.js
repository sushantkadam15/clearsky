const express = require('express');
const app = express();
const port = 3200;
const path = require('path');
const autoComplete = require('match-sorter');
var $ = require( "jquery" );
app.use(express.urlencoded({extended: true})); 
//********** Serving Static Files **********//

app.use(express.static('public'))
//********** Embedded JS **********// 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//*** Initiating Expresss App ***// 
app.listen(port, () => console.log(`Weather App active on ${port}`));
app.get('/', (req, res) => res.render('index'));

//********** Routes **********// 
app.get('/city', (req, res) =>{
    const request = req.query.cityname;
    res.send(`Website under progress. Requested City ${request}`,)
})