const http = require("http");
const { StringDecoder } = require("string_decoder");
const url = require("url");

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true);
  let path = parsedUrl.pathname;
  // remove the first
  let trimmedPath = path.replace(/^\/+|\/+$/, "");
  let queryStringObj = parsedUrl.query;
  let method = req.method.toLocaleLowerCase();
  let headers = req.headers;
  // extract the payload if there is
  let decoder = new StringDecoder("utf-8");
  var buffer = "";

  req.on("data", (data) => {
    // As the data streams in it is appended to the buffer string
    buffer += decoder.write(data);
  });
  req.on("end", () => {
    buffer += decoder.end();
  });
  res.end("Request Completed");
});

server.listen(3000 || true, () => {
  console.log("Listening on Port 3000");
});
