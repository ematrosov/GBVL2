//const http = require('http');
//const fs = require('fs');

//const server = http.createServer((req, res) => {
//console.log(req.url)

// let body = null
//try {
//const ext = req.url.split('.')[1]
//const isSvg = ext === 'svg';
//if (isSvg) {//
//  res.setHeader('Content-Type
//  ', 'image / svg + xml');
// }
//body = fs.readFileSync(`./public${req.url}`)
// } catch (err) {
//    body = fs.readFileSync(`./public/index.html`)
//}
//     ? fs.readFileSync('./public/CSS/style.css', 'utf8')
//     : fs.readFileSync('./public/index.html', 'utf8')
//  res.end(body)
//})
//
//const port = process.env.PORT || 3000
//server.listen(port)

//console.log('Server started')

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/itemslist/:page', (req, res) => {
    const page = req.params.page;
    fs.readFile(`/public/database/items${page}.json`, 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/itemslist', (req, res) => {
    const offset = 6;
    const filePath = './public/database/items3.json'

    fs.readFile(filePath, 'utf8', (err, data) => {
        const list = JSON.parse(data || {});
        const amountOfData = Object.keys(list).length;
        const newID = offset + amountOfData + 1;
        const newItrem = req.body;
        newItrem.id = newID;
        list[newID] = newItrem;
        fs.writeFile(filePath, JSON.stringify(list), (err) => {
            if (err) {
                console.log(err);
            }
            res.send(list)
        })
    })

})

app.listen(4000, () => {
    console.log('Server started')
});

