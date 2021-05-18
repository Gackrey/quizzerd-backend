const IplQuiz = require('./JSON/ipl-quiz.json');
const MarvelQuiz = require('./JSON/marvel-quiz.json');
const ReactQuiz = require('./JSON/react-quiz.json');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000|process.env.PORT;

app.use(cors())
app.get('/',(req,res)=>{
    res.json({ hello: "world" })
})
app.get('/ipl',(req,res)=>{
    res.json(IplQuiz)
})
app.get('/marvel',(req,res)=>{
    res.json(MarvelQuiz)
})
app.get('/react',(req,res)=>{
    res.json(ReactQuiz)
})
app.listen(PORT,() =>{
    console.log(`Listening to port ${PORT}`);
})