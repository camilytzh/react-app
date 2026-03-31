const express = require('express');
const cors = require('cors');
require ('dotenv').config();
const db = require('./db');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacto', require('./routes/contacto'));
app.use('/api/citas', require('./routes/citas'));
app.use('/api/pagos', require('./routes/pagos'));

db.getConnection()
    .then(() => {
        console.log('MySQL connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server at http://localhost:${process.env.PORT}`);
        });
    })
    .catch(err => console.error('Connection error:', err));