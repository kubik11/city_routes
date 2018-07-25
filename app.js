const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
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
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});