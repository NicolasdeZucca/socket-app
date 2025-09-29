const express = require("express");
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.port;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();

        //Sockets
        this.sockets();
    };

    middlewares() {
        //Cors
        this.app.use(cors());

        //public directory
        this.app.use(express.static('public'));
    };

    sockets(){
        this.io.on("connection", (socket) => {
            console.log("Cliente conectado")
        
        
            socket.on("disconnect", () => {
                console.log("Cliente desconectado")
            });

            socket.on("send-message", (payload) => {
                console.log(payload)
            });
        
        });

    };


    routes() {
    };

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Escuchando en el puerto: ${ this.port }`);
        })
    };

};



module.exports = Server;