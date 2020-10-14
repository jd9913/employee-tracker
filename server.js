const db=require('./db/database');
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



  // Default response for any other requests(Not Found) Catch all
  app.use((req, res) => {
    res.status(404).end();
  });

  //start server after DB connection
  db.on('open', ()=>{
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});