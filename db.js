// first command to install mongoose
// npm i mongoose

// https://mongoosejs.com/docs/   [Getting started]

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/w5_d3'

const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true },()=>{
        console.log('the connection established ...')
})

// Extra Info
db.on('error',err =>{
    console.log(err.message + 'mongo not running');
});
db.on("connected", () => {
    console.log('Mongod Connected ...');
});
