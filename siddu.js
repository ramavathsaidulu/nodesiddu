var express = require('express')
var app = express()
var ejs=require('ejs');
var path=require('path');


app.get('/home',function(req,res){
	res.send('hello World')
})

app.get('/about', function (req, res) {
  res.render('about.ejs');
})

app.get('/contact', function (req, res) {
   res.render('contact.ejs');

})

app.get('/',function(req,res){

app.set('views','./views');
  app.set('view engine','ejs');
  app.use(express.static(path.join(__dirname,'assets')));
  res.render('home.ejs');
  res.render('contact.ejs');
  
 })
app.listen(8000);
console.log('running at 8000');