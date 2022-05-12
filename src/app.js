import { mongodb_conection } from './database/db_settings.js';
import { route } from './routes.js';
import express from 'express';
import http from 'http';
import 'dotenv/config';
import cors from 'cors';


// Settings
mongodb_conection;
const app = express();
app.use(cors())
app.use(express.json());
const server = http.Server(app);


// Routes
app.use('/', route)


// Server
server.listen(process.env.PORT || 5000, () => {console.log(`Serve running at port: ${process.env.PORT}`)})