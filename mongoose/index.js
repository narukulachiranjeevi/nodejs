const express = require('express');

const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

app.get('/',(req,res) => {
    res.send('hello world;');
});
mongoose.connect('mongodb://Localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true}
,( err ) => {
    if (err) throw err;
    console.log('connected to mongodb');
});
app.listen('3000', () => console.log('listening at 3000'));