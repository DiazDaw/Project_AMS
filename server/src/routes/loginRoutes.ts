import {Router} from 'express';
import { login } from '../controllers/loginController';

const router = Router();

// RUTA LOGIN
router.post('/', login);

export default router;