import http from 'http';
import express from "express";
import dotenv from "dotenv";
import router from '../app-fruit-be/src/routers/router.js';
import dbConnection from '../app-fruit-be/src/configs/db.config.js';
dotenv.config();

dbConnection();

const port = process.env.PORT || 3000
const app = express();
const httpServer = http.Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

httpServer.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
