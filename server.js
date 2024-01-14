const fastGateway = require('fast-gateway');

// require('dotenv').config();
const port = 9000;
const checkAuth =(req,res,next)=>{
    if(req.headers.token && req.headers.token !=''){
        next();
    } else{
        // res.setHeader('Content-type', 'application/json');
        // res.statusCode = 401;
        // res.end(JSON.stringify({status:401, message: "Auth Failed"}))
        next() // temp in demo 
    }
}
// app.use(bodyParser.json());
const server = fastGateway({
    middlewares:[checkAuth],
    routes: [
        {
            target: "http://localhost:9001",
            prefix: '/user',
            methods: ['GET', 'POST']
            // middlewares:[checkAuth]
            // hooks:
        },
        {
            target: "http://localhost:9002",
            prefix: '/order',
            methods: ['GET', 'POST']
            // middlewares:[checkAuth]
            // hooks:
        },
        {
            target: "http://localhost:9003",
            prefix: '/products',
            methods: ['GET', 'POST']
            // middlewares:[checkAuth]
            // hooks:
        }
    ]
})

server.get('/', (req, res) => {
    const msg = { msg: "API gateway is called" }
    console.log(res);
    res.send(msg)
});

server.start(port).then(server => {
    console.log(`API gateway is running on http://localhost:${port}`);
});
