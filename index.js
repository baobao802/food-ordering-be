import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './src/routers/router';
import dbConnection from './src/configs/db.config';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

global.__basedir = __dirname;
dotenv.config();

dbConnection();

const port = process.env.PORT || 5000;
const app = express();
const httpServer = http.Server(app);

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

httpServer.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
