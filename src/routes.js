import express from 'express';
import {minha_api} from './teste.js';
import { addNewProject } from './controllers/newproject.js';
import { getApi } from './controllers/showprojects.js';

// Convert in a String json valid at front
const trasform = JSON.stringify(minha_api)



// Routes Settings 
export const route = express.Router();

// GET 
route.get('/apidaaplicacaodeportfolio11223344', getApi)


// POST 
route.post('/apiapidaaplicacaodeportfolio11223344', addNewProject)

