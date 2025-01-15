require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./route/userroute');
const connectDB = require('./connection'); 

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/user', userRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', async () => {
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
});
