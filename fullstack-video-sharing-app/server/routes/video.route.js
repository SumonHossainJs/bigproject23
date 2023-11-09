import express from 'express';
import { addVideo, deleteVideo, updateVideo, getVideo,addView, randomVideo, trend, sub, getbyTag, search } from '../controllers/video.control.js';

import {verifyToken} from '../verifyToken.js';

const router = express.Router();



export default router;


