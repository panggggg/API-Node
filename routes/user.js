import express from 'express';
import { createUser, getUsers, deleteUser, getUser, updateUser } from '../controllers/users.js';
import cache from '../middleware/cache.js';


const router = express.Router();




router.get('/', getUsers);

router.post('/', createUser);

// /users/2 => req.params { id:2 }
router.get('/:id', cache, getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;