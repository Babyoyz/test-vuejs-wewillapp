var mysql = require('mysql');

const openconnection = (host,user,password,database) => {

      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "supcsd",
      database: "testvuejs"
    });

    return con
}


module.exports = openconnection

