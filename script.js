const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url)

    let body = null
    try {
        const ext = req.url.split('.')[1]
        const isSvg = ext === 'svg';
        if (isSvg) {
            res.setHeader('Content-Type
            ', 'image / svg + xml');
        }
        body = fs.readFileSync(`./public${req.url}`)
    } catch (err) {
        body = fs.readFileSync(`./public/index.html`)
    }
    //     ? fs.readFileSync('./public/CSS/style.css', 'utf8')
    //     : fs.readFileSync('./public/index.html', 'utf8')
    res.end(body)
})

const port = process.env.PORT || 3000
server.listen(port)

console.log('Server started')