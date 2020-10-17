const db = require('./db/database');
const inputCheck = require('./utils/inputCheck');
const express = require('express');

const PORT = process.env.PORT || 3011;
const app = express();


//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const apiRoutes = require('./routes/apiRoutes');


//use apiRoute

app.use('/api', apiRoutes);


//create connection to the database

const mysql = require('mysql2');

const connection = mysql.createConnection({

  host: 'localhost',
  port: `${PORT}`,
  user: 'jd9913',
  password: 'Jmd#6701',
  database: 'tracker'

});

connection.connect(err => {

  if (err) throw err;

  console.log('connected as id' + connection.threadId);

  afterConnection();
});


afterConnection = () => {
  connection.start = (startScreen(), function (err, res) {

    if (err) throw err;
    console.log(res);
    connection.end();
  });

};






// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

//start server after DB connection
db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});