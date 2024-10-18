import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import setUpRoutes from './router.js';

dotenv.config();

// MongoDB Connection
/*
await mongoose.connect(
    process.env.MONGO_URI
).then(() => console.log('Connected to MongoDB'));
*/

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setUpRoutes(app);

app.listen(3000, () => {
    console.log('Listening to port 3000...');
});