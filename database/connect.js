const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST_DEV,
  user: process.env.DB_USER_DEV,
  password: process.env.DB_PASS_DEV,
  database: process.env.DB_NAME,
  dateStrings: 'date',
};

// const dbConfig = {
//   host: process.env.DB_HOST_DEV,
//   user: process.env.DB_USER_DEV,
//   password: process.env.DB_PASS_DEV,
//   database: process.env.DB_NAME,
//   dateStrings: 'date',
// };

// const db = mysql.createConnection(dbConfig);
// db.connect(() => console.log('DB Connected'));

const db = mysql.createPool(dbConfig);

db.getConnection(function (err) {
  if (err) {
    console.log(`ERROR CONNECT DB`);
    throw err;
  } else {
    console.log('Connected!');
  }
});

db.on('error', function (err) {
  console.log('ERROR CONNECT DB ON EVENT');
  throw err;
});

// db.query('SELECT * FROM user_status', (error, result) => {
//     if(error) throw error;
//     console.log('TEST QUERY: '+ JSON.stringify(result));
// });

module.exports = db;
