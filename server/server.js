const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware 
// To allow posting of nested objects form query 
app.use(express.urlencoded({extended: true}));
// Parses incoming requests with JSON 
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);

// Connect to MongoDB
// The URI we explicitly state is what the db will be named in the dockerfile
mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongodb_mern-boilerplate:27017');

// Start the server
app.listen(PORT, function() {
    console.log(`API server listening on PORT: ${PORT}`);
});