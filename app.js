const http = require("http"); //importing http module for creating server

//creating a server
const server = http.createServer((req, res) => {
  const url = req.url;
  
  // Setting status code and message
  res.statusCode = 200;
  res.statusMessage = "OK";

  // Checking if headers are sent
  if (!res.headersSent) {
    // Setting custom header
    res.setHeader("X-My-Header", "Custom Value");
  }
  //Routing Requests
  if (url === "/") {
    res.write("<html>");
    res.write("<head> <title> Home Page </title> </head>");
    res.write(" <body><h1>Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head> <title> About Page </title> </head>");
    res.write(" <body><h1>About Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.write("<html>");
    res.write("<head> <title> 404 - Not Found  </title> </head>");
    res.write(" <body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 3000; //port number

// server is listening on port 3000
server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
