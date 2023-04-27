import {Router} from 'express';
import { login } from '../controllers/loginController';

const router = Router();

// RUTA LOGIN
router.get('/:dni/:contrasenia', login);

export default router;