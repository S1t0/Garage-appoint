import fastify from "fastify";
import { PORT } from "./config";
import main_app from "./app";

const server= fastify({
    logger:{
        prettyPrint:true
    },
    disableRequestLogging:false
});

server.register(main_app)

server.listen(PORT);