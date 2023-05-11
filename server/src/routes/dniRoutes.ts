import {Router} from 'express';
import { getDNIFallero } from '../controllers/dniController';

const router = Router();

// RUTAS CRUD FALLEROS
router.get('/', getDNIFallero);


export default router;