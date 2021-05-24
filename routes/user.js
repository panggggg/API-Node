import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});

router.post('/', (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4() });


    res.send('User with the name ' + user.firstname + ' added to the database!');
});


// /users/2 => req.params { id:2 }

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
})

export default router;