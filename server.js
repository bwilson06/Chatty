var express = require("express");
var PORT = process.env.PORT || 3001;

//initialize express server
var app = express();

//making public a static folder
app.use(express.static("public"));


//starting server
app.listen(PORT, function() {
    console.log(`Express is running on port ${PORT}`);
  });