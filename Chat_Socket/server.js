const express=require('express')
const app=express()
const http=require('http').createServer(app)
const io=require('socket.io')(http,{cors:{origin:"*"}})
app.use(express.static('public'))
io.on('connection',socket=>{
socket.on('joinRoom',room=>{
socket.join(room)
socket.room=room
})
socket.on('chatMessage',msg=>{
if(socket.room)io.to(socket.room).emit('chatMessage',msg)
})
})
http.listen(3000)
