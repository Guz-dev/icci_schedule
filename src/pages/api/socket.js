import { Server } from "socket.io"

export default function SocketHandler(req,res){
  if (res.socket.server.io) {
    console.log('Socket is already attached')
    return res.end()
  }
  
  const io = new Server(res.socket.server)
  res.socket.server.io = io
    
  io.on("connection", (socket) => {
    socket.on("send-message", (obj) =>{
      io.emit("recieve-message", obj)
    })
  })

  console.log("Setting Socket")
  res.end()
}