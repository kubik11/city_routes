const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use( methodOverride('_method') );
console.log('app has started');

app.set('view engine', 'ejs');
app.use(express.static('views/public'));

app.get('/', (req, res) =>{
	// res.render('home');
	res.redirect('/home');
});
app.get('/home', (req, res) =>{
	res.render('home');	
});																			
app.post('/', (req, res) =>{
	
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});