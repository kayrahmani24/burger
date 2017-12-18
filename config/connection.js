var mysql = require("mysql");
var connection;



    // mysql connection
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
  
// Connection to mysql
    connection.connect(function(err) {
        if (err) {
          console.error("error connecting: " + err.stack);
          return;
        }

        console.log("connected as id " + connection.threadId);
    });

    // exporting mysql connection for other files use.
    module.exports = connection;