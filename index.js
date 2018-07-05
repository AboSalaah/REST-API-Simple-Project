const express = require('express');
const bodyParser = require('body-parser');
//setup express app
const app = express();
//extract the data and attach it into the req using body-parser
app.use(bodyParser.json());
//intialize routes
app.use('/api',require('./routes/api'));
//listen to a specific port number for handling requests
app.listen(3000,function(){
   console.log("i'm listening noooooooow!");
});