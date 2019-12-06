const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require('./routes/tasks');
const categoryRouter = require('./routes/category');
const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();

const auth = require('./auth');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use('/users', userRouter);
app.use(auth);
app.use('/tasks', taskRouter);
app.use('/categories', categoryRouter);

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.statusCode = 500;
//     res.json({ message: err.message });
// });

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});