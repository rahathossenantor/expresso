import app from "./app";
import { Server } from "http";

const port: number = 5000;
let server: Server;

const bootstrap: Function = async () => {
    server = app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
};
bootstrap();
