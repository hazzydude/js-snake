const express = require('express')
const app = express()
path = require('path')
var serveStatic = require('serve-static')

// app.use(express.static('/app/app.html'))
// , express.static(`${__dirname}/app`))

app.use(express.static(path.join(__dirname, './app')));

// app.use(serveStatic('/app', { 'index': ['app.html'] }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Snake app listening at http://localhost:${PORT}`))



