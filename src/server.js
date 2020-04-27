const express = require("express");

const app = express();

//For post Requestes
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api' ,require('./routes/api'));

app.listen(3000, function() {
    console.log("server started at port 3000");
    
})