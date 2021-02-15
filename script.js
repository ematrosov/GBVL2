const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url)
    const body = req.url === '/CSS/style.css'
        ? fs.readFileSync('./public/CSS/style.css', 'utf8')
        : fs.readFileSync('./public/index.html', 'utf8')
    res.end(body)
})

const port = process.env.PORT || 3000
server.listen(port)

console.log('Server started')