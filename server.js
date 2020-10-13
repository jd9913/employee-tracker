const sqlite3 = require('sqlite3').verbose();

const express=require('express');

const PORT = process.env.PORT||3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// Connect to database
const db = new sqlite3.Database('./db/tracker.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the employee tracking database.');
  });










// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});