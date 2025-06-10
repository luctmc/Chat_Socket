const socket=io()
let currentRoom=''
document.getElementById('join').onclick=()=>{
currentRoom=document.getElementById('room').value
socket.emit('joinRoom',currentRoom)
}
document.getElementById('send').onclick=()=>{
const msg=document.getElementById('msg').value
socket.emit('chatMessage',msg)
document.getElementById('msg').value=''
}
socket.on('chatMessage',msg=>{
const li=document.createElement('li')
li.textContent=msg
document.getElementById('messages').appendChild(li)
})
