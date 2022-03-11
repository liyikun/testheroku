const http = require('http')


http.createServer((req, res) => {
    res.write('Hello TikTok!')
}).listen(process.env.PORT || 3000)