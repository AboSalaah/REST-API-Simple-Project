const express = require('express');
//setup express app
const app = express();
//intialize routes
app.use('/api',require('./routes/api'));
//listen to a specific port number for handling requests
app.listen(3000,function(){
   console.log("i'm listening noooooooow!");
});