
const mysql = require('mysql2');
const config = require('./connection-config');


class Connection {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  query(str,obj) {
    return new Promise((resolve,reject) => {
      this.connection.query(str,obj,(err,res) => {
        if (err) {
          throw err;
          return reject(err);
        }
        resolve(res);
      });
    });
  }

  destroy() {
    return new Promise((resolve,reject) => {
      this.connection.destroy((err,res) => {
        if(err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

}

module.exports = new Connection(config);
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'chickens_db'
// });

// module.exports = connection;