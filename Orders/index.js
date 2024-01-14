const express = require("express");
const app = express();
const body = require('body-parser');
const cors = require('cors');
const ORDER_LIST = require('./ORDER_LIST.json');
const port=9002;

app.use(cors())
app.use(body.urlencoded({extended : true}));
app.use(body.json());

app.get('/', (req, res)=>{
    // res.send("order service is called")
    res.status(200).json(ORDER_LIST);
    // res.send(ORDER_LIST);
})

app.listen(port, ()=> {
    console.log(`order service is running on http://localhost:${port}`);
})