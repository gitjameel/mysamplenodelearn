const express = require('express');
var mysql = require('mysql');
const app = express()
const port = process.env.PORT || 5050

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/details',(req,res) => res.send("Getting details service"))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

var  connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'bismi',
  database : 'mydatabase'
});

connection.connect(function(err){
  if(err) {
    console.log("Error in connecting to database :" + err);
  }else {
    console.log("database connected sucessfully");
  }
});


app.get('/getdata', function(req, res){
  connection.query('SELECT * from trafficdata', function(err, rows, fields) {
      if (!err) {
        console.log('The solution is: ', rows);
        res.send(rows);
      }
      else
        console.log('Error while performing Query.');
    });
});