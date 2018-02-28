const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/src'));

const server = app.listen(3000, function(){
    const host = server.address().host;
    const port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
    
})