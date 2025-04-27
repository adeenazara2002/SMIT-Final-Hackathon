const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch((err) => console.log(err));
