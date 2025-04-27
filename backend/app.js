import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes setup
app.use('/api/users', userRoutes);  // Prefixing the routes with `/api/users`

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

