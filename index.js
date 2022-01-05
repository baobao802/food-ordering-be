import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import router from './src/routers/router';
import dbConnection from './src/configs/db.config';
dotenv.config();

dbConnection();

const port = process.env.PORT || 3000;
const app = express();
const httpServer = http.Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

httpServer.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
