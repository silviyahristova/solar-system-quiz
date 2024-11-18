const http = require(`http`)
const fs = require(`fs`)
const port = 3000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile(`index.html`, function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('404.html')
        } else {
            res.write(data)
        }
        res.end()
    })
});

server.listen(port, function (error) {
    if (error) {
        console.log('404.html', error)
    } else {
        console.log(`Server is listening on port` + port)
    }
});