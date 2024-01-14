const app = require("express")();
const body = require('body-parser');
const cors = require('cors');
const users_data = require('./MOCK_DATA.json');
const port = 9001;

app.use(cors());
app.use(body.urlencoded({extended : true}));
app.use(body.json());
// app.use("/", users);
app.get('/',function (req, res) {
    res.status(200).json(users_data);
})

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
})