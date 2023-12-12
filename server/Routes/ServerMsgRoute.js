import express from "express";
import { getServerMessage, createServerMessage, updateServerMessage, deleteServerMessage} from '../Controllers/ServerMsgController.js';
import { isAdmin } from '../Middlewares/isAdmin.js';
import { dontExecuteAtProduction } from '../Middlewares/dontExecuteAtProduction.js';

const router = express.Router()

router.get('/:urlParameter', getServerMessage);
router.post('/', isAdmin, dontExecuteAtProduction, createServerMessage);
router.put('/:urlParameter', isAdmin, dontExecuteAtProduction, updateServerMessage);
router.delete('/:urlParameter', isAdmin, dontExecuteAtProduction, deleteServerMessage);

export default router; 