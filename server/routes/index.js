var express = require('express');
var router = express.Router();


var angularLocal = 'localhost:4200';
/* GET home page. */

router.get(angularLocal, function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });


module.exports = router;
