var express = require('express');
var fs = require('fs');
var app = express();

var data;

app.get('/fileread', function(req, res) {
    console.log("into fileread service");
    var readstream = fs.createReadStream('app.js');
    console.log("readstream " + readstream);
    readstream.setEncoding('UTF8');
    readstream.on("data", function(chunk) {
        console.log(chunk);
        data= data + chunk;
    });


    readstream.on("end", () => console.log(data));

    readstream.on("error", function(err) {
        console.log(err);
    });

    
});


app.listen(5052, () => console.log("Server started and listening on 5052"));