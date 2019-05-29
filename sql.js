var connection  = require('./app.js');

var sqlquery=  function(req, res){
    connection.query('SELECT * from trafficdata', function(err, rows, fields) {
        if (!err) {
          console.log('The solution is: ', rows);
          res.send(rows);
        }
        else
          console.log('Error while performing Query.');
      });
  }; 

module.exports=sqlquery