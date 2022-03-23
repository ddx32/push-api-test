const { WebSocketServer } = require("ws");
const express = require("express");
const path = require("path");

const socketServer = new WebSocketServer({ port: 8080 });
const staticServer = express();

let sockets = [];
socketServer.on("connection", (socket) => {
  sockets.push(socket);

  socket.on("message", (msg) => {
    sockets.forEach((s) => s.send(msg));
  });

  socket.on("close", () => {
    sockets = sockets.filter((s) => s !== socket);
  });
});

staticServer.use(express.static("client"));
staticServer.get("/insecure", (req, res) => {
  res.send("Witaj bardzo");
});

staticServer.listen(8090, () => {
  console.log("Static server running on http://localhost:8090");
});
