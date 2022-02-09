const mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'milkbankaws.cea9oubggne2.ap-northeast-1.rds.amazonaws.com',
  user     : 'root',
  password : 'milkbank',
  database : 'MilkBank',
  port     : 3306,
});

/*db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});
db.end()*/

module.exports = db;
