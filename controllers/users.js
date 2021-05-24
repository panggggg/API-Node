import { v4 as uuidv4 } from 'uuid';
uuidv4();
import User from '../models/userInfo.js';

let users = [];

export const getUsers = async (req, res) => {
    const users = await User.find();
    console.log(users)
    res.send(users);
}

export const createUser = async (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    const newUser = new User(req.body);

    const saveUser = await newUser.save(function (err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
    });

    // res.send('User with the name ' + user.firstName + ' added to the database!');
    res.json(saveUser);
}

export const getUser = async (req, res) => {
    const find = await User.findById({ _id: req.params.id });
    res.json(find);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const result = await User.findByIdAndDelete({ _id: req.params.id })

    res.send('User with the id' + id + ' delete from the database.');
}

export const updateUser = async (req, res) => {
    const { id } = req.params;

    const update = await User.updateOne({ _id: req.params.id }, { $set: req.body })

    res.send('User with the id ' + id + ' has been update.');
}