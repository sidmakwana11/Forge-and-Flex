const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/memberRoutes');

// Correct MongoDB connection string
const dbURL = "mongodb+srv://Siddharth2003:%40Sidmak2003@forgeandflex.9e8a0.mongodb.net/forgeandflex?retryWrites=true&w=majority";

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

connectDB(); // Establish connection

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
