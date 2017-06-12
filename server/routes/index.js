var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'My Express'
    });
});

router.get('/search', function(req, res, next) {
    //console.log("am in here");
    request.get('https://api.themoviedb.org/3/search/movie?api_key=731d96383cdf751b7cfafe0303f82ea3&language=en-US&query=' + req.query.moviename + '&page=1&include_adult=false', function(err, response, body) {
        // request.get('https://api.themoviedb.org/3/search/movie?api_key=731d96383cdf751b7cfafe0303f82ea3&language=en-US&query='+req.query.moviename+'&page=1&include_adult=false',function(err,response,body){
        //console.log(req.query.moviename);
        if (response.statusCode == 200) {
            res.json(response.body);
            //console.log("am in if");
        } else {
            //console.log("am in else")
            res.send('error occured');
        }
    });
});

module.exports = router;