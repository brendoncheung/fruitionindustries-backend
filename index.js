const Joi = require('joi');
const mongoose = require('mongoose')
const cors = require('cors')
const purchaseRoute = require('./routes/purchase-request-route');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api/purchase', purchaseRoute);

const connectionString = 'mongodb://localhost/fruitiondb'
mongoose
.connect(connectionString)
.then(() => {
    console.log("database connected")
})

app.listen(port, () => console.log(`Listening on port ${port}...`));