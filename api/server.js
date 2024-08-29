const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors({
    exposedHeaders:['X-Total-Count'] 
}));
server.use(express.json());

const connectToDatabase = require('./databaseConnection');
connectToDatabase();

const card = require("./cardRouets");
server.use('/', card);

server.get('/',(req,res)=>{
    res.json({
        "status": 200,
        "message": "all good get ready to run code"
    });
});

server.listen(8000, ()=>{
    console.log("Status : 200");
})
