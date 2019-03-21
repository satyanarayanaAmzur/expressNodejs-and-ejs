var express = require('express');
var router = express.Router();

const results=[
  {
    name:'satya',
    role:'developer',
    contactNo:7845121245
  },
  {
    name:'kiran',
    role:'Leader',
    contactNo:7845121245
  },
  {
    name:'Prathush',
    role:'SeniorDeveloper',
    contactNo:7845121245
  },
  {
    name:'Ravi',
    role:'developer',
    contactNo:7845121245
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

//method to displaying the dat awhich is supplied
router.get('/display',function(req,res,next){
  // res.render('display',{page:JSON.stringify(results),menuId:'display'});
  res.render('display', { posts: results ,page:'Display',menuId:'display' });
});

router.get('/saved/:number', function(req, res, next) {
  const mobileNo=req.params.number;
  alert(mobileNo);
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});


module.exports = router;