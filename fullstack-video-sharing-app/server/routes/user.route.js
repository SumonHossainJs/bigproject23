import express from 'express';

import { Update,deleteUser, getUser, subscribe, unsubscribe, like, disLike  } from '../controllers/user.control.js';
import {verifyToken} from '../verifyToken.js';

const router = express.Router();

// update user
router.put("/update/:id", verifyToken, Update);

// delete user 

router.delete("/delete/:id", verifyToken, deleteUser);

// get a user 

router.get("/find/:id", getUser);

// subscribe A user 
router.put("/sub/:id", verifyToken,  subscribe);

