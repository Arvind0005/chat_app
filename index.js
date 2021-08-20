const app = require('express')()
const http = require('http').createServer(app)

app.get('/', (req, res) => {
   res.send("Node Server is running. Yay!!")
})

const socketio =require('socket.io')(http);

socketio.on("connection",function(usersocket)
{
    usersocket.on("send_message",function(data)
    {
        usersocket.broadcast.emit("receive_message",data);
    });
});

http.listen(process.env.PORT,function()
{
    console.log("listening to port 8080");
});