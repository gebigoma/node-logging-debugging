const http = require('http');
const fs = require('fs');
const chalk = require('chalk');

// es6 way of writing a function expression
const routes = (req, res) => {
  const { url } = req;
  if (url === '/') {
    fs.readFile('views/index.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();  
    })
  } else if (url === "/about") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>This is our About Page!</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end("<h1>Sorry, this page doesn't exist!<h1>");
  }
};

const server = http.createServer(routes);

// to log exactly what's going on on node server
const port = 3000;
server.listen(port, function() {
  console.log(chalk.green(`Our server is running on port ${port}`));
});

