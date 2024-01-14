const express = require("express");
const app = express();
const body = require('body-parser');
const cors = require('cors');
const PRODUCT_LIST = require('./PRODUCT_LIST.json');
const port=9003;

app.use(cors())
app.use(body.urlencoded({extended : true}));
app.use(body.json());

app.get('/', (req, res)=>{
    // res.send("order service is called")
    res.status(200).json(PRODUCT_LIST);
    // res.send(PRODUCT_LIST);
})

app.listen(port, ()=> {
    console.log(`product service is running on http://localhost:${port}`);
})