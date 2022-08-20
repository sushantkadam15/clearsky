const express = require('express');
const app = express();
const port = 3200;
const path = require('path');

//********** Serving Static Files **********//
app.use(express.static('public'));
app.use('public', express.static(__dirname + '/public'));

//********** Embedded JS **********// 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(port, () => console.log(`Weather App active on ${port}`));
app.get('/', (req, res) => {
    res.render('app');
})