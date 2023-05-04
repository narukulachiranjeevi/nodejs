const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    if(!err) {console.log('MongoDB Connection Succeeded.')}
    else {console.log('Error in DB connection : ' + err)}
    });
app.get('/',(req,res) => {
    res.send('Hello World');
});
app.get('/page',(req,res) => {
    res.sendFile('./page.html',{root:__dirname});
});
app.listen(3000, () => console.log('listening at 3000'));