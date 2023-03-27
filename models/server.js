import express from "express";
import cors from "cors";
import router from "../routes/users.js";

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoutePath = '/api/users'

        //middlewares 
        this.middlewares();

        //routes
        this.routes();
    }
        
    middlewares() {
        //CORS
        this.app.use(cors());

        //to backend
        this.app.use(express.json());

        //public directory
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersRoutePath, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Rest server listening on ${this.port}`);
        })
    }
}

export default Server;