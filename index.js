const http = require('http')


http.createServer((req, res) => {
    res.write('hello')
}).listen(process.env.PORT || 3000)