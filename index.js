const Joi = require('joi');
const purchaseRoute = require('./routes/purchase-request-route');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/purchasing', purchaseRoute);

const connectionString = 'mongodb://localhost/fruitiondb'

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));