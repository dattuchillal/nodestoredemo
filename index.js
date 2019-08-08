const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRouter);
app.use(shopRouter);

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
