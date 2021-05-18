const IplQuiz = require('./JSON/ipl-quiz.json');
const MarvelQuiz = require('./JSON/marvel-quiz.json');
const ReactQuiz = require('./JSON/react-quiz.json');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

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
app.get("/*", (req, res) => {
    res.status(404).json({ errorMessage: "it's not here!"})
})
app.listen(PORT,() =>{
    console.log(`Listening to port ${PORT}`);
})