const http = require("http");
const url = require("url");

const server = http.createServer(
    (req, res) => {
  let parsedUrl = url.parse(req.url, true);
  let path = parsedUrl.pathname;
  // remove the first 
  let trimmedPath = path.replace(/^\/+|\/+$/,'');
  let queryStringObj= parsedUrl.query;
  let method = req.method.toLocaleLowerCase();
  let headers= req.headers;
  res.end('Request Completed');
}
);

server.listen(3000||true,
    ()=>{
console.log('Listening on Port 3000');
})