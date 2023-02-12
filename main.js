'use strict';
/* --- External Modules --- */
import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
/* --- Internal Modules --- */
import pageRoutes from './lib/backend/routes/pages.js';
/* --- Middlewares --- */
const __port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Views
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejstrings');
// Routes
app.use(pageRoutes);
// Public
app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'lib/frontend')));
 

/* --- Server & DataBase connection --- */
app.listen(__port, () => {
    console.log('The server is listening on port', __port);
});
app.on('error', (err) => {
    console.error(err);
});
