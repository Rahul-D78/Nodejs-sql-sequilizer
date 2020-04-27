const express = require("express");
const { db } = require('./model')

const app = express();

//For post Requestes
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api' ,require('./routes/api'));

app.listen(3000, function() {
    console.log("server started at port 3000");
    
});

db.sync()
  .then(() => {
    app.listen(7788, () => {
      console.log('Server started on http://localhost:7788/')
    })
  })
  .catch(err => {
    console.error(err)
  })