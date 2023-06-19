//----------MAYBE DELETE THIS FILE-----------
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  if (req.url === "/api/courses") {
    //----------DATABASE HERE---------
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);
console.log("Listening on port 3000...");


// //from codeAcademy
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });

// server.listen(4001, () => {
//   const { address, port } = server.address();
//   console.log(`Server is listening on: http://${address}:${port}`);
// });

