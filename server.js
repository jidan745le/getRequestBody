const {getRequestBody} = require("./requestbody/index.js");
const http = require("http");

http.createServer(async function(req,res){
    const body = await getRequestBody(req, res);
    console.log(body);
    res.end(body);
}).listen(3200);

