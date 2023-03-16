const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const connectDb = require('./config/dbconnection.js')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDb();

app.use('/api/todo/', require('./routes/todoRouter'))
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
