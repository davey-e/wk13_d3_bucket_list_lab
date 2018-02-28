const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/src'));

MongoClient.connect('mongodb://localhost:27017', function(err, client){
    if(err){
        console.log(err);
        return;
    }
    const db = client.db('bucket-list');
    console.log('Connected to database');

    const server = app.listen(3000, function(){
        const host = server.address().host;
        const port = server.address().port;
    
        console.log('Server listening at http://%s:%s', host, port);
        
    });

});