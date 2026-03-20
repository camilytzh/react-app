const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const db = require('./db');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

db.getConnection()
    .then(() => {
        console.log('MySQL connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server at http://localhost:${process.env.PORT}`);
        });
    })
    .catch(err => console.error('Connection error:', err));