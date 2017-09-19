const express = require('express');
const router = express.Router();

const Person = require('../models/person');

router.get('/new', function(req, res){
    var newP = new Person({
        name: "random",
        number: Math.floor(100000000 + Math.random() * 900000000)        
    });

    newP.save(function(err){
        if(err){
            console.log("fuck");
        } else {
            console.log("fack ye: " + newP);
            res.send(newP);
        }
    })
});

router.get('/all', function(req, res){
    Person.find({}, function(err, persons){
        if(err){
            console.log("faaack");
        } else {
            console.log(persons);
            res.send(persons);
        }
    })
})

module.exports = router;