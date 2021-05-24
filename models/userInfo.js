import mongooes from 'mongoose';

const userSchema = new mongooes.Schema({
    firstName: String,
    lastName: String,
    age: String
});

export default mongooes.model('Info', userSchema);