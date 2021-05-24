import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import mongoose from 'mongoose';

//Create express app
const app = express();

mongoose.connect('mongodb://localhost:27017/myapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("***Connected to MongoDB***");
});

//Middleware
app.use(bodyParser.json());

app.use('/users', userRoutes);

//Route
app.get('/', (req, res) => {
    console.log("[*] Test");
    res.send("Hello, World!");
});


//Start listening to the server
app.listen(5000, () => console.log("Listening on port 5000"));