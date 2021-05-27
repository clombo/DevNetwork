const express = require('express');
const connectDB = require('./config/db');

//Init app
const app = express();

//Connect to database
connectDB();

//Include parsing middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Specify PORT app will be listening to
var PORT = process.env.PORT || 5000;

//Main route
app.get('',(req, res) => {
   res.json({message: 'API running'})
});

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

//Start app
app.listen(PORT, console.log(`server running on port ${PORT}`));