import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import './db.mjs';
//import mongoose from 'mongoose';

//mongoose.connect('mongodb://localhost/hw04');
const Review = mongoose.model('Review');

app.listen(process.env.PORT || 3000);
