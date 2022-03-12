const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4 : uuidV4} = require('uuid')


app.use(express.static('../frontend'))

app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
    
})

app.get('/:room', (req,res) => {

    
    console.log(req.params.room)
    
})

server.listen(3000)
