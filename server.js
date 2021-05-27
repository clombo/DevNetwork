const express = require('express');

//Init app
const app = express();

//Include parsing middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Specify PORT app will be listening to
var PORT = process.env.PORT || 5000;

//Main route
app.get('',(req, res) => {
   res.json({message: 'API running'})
});

//Start app
app.listen(PORT, console.log(`server running on port ${PORT}`));