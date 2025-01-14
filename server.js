const http = require(`http`);
const fs = require(`fs`);
const port = 3000;

//HTTP server that handles requests and responses.
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile(`index.html`, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('404.html');
        } else {
            res.write(data);
        }
        res.end();
    });
});

//Start the server to listen on the specified port and logs success or error.
server.listen(port, function (error) {
    if (error) {
        console.log('404.html', error);
    } else {
        console.log(`Server is listening on port` + port);
    }
});