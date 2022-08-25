const express = require('express');
const app = express();
const port = 3200;
const path = require('path');
const apiResults = require('./public/js/api-handling.js') ;

// const apiResult = './public/js/api-handling'; 

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
app.get('/city', async (req, res) =>{
    let requestedCity = String(req.query.cityname);
    requestedCity.slice(0, -1);
    retreivedData = await apiResults.cityWeather(requestedCity)
    console.log(retreivedData)
    res.send(`Website under progress. Requested City ${requestedCity} | ${retreivedData}`)
})