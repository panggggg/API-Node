import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';

//Create express app
const app = express();

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