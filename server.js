const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const person = require('./models/person');

const api = require('./routes/api');

const app = express();

//app.set('port', '3000');

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

//Database VM with IP 192.168.20.3
mongoose.connect('mongodb://192.168.20.3/telephonebook', function(err){
    if(err){
        console.log("Can't connect to database");
    } else {
        server.listen('3000', function(err){
            if(err){
                console.log("Can't connect server");
            } else {
                console.log("Connected to db and listening on port: 3000");                
            }
        });
        
        
    }
});

app.get('/', function(req, res){
    res.send("hello world");
});
