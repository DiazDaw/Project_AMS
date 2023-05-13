import { Router } from 'express';
import { updatePassword } from '../controllers/changePasswordController';

const router = Router();

// RUTAS CRUD ASISTENTES

router.put('/:idFallero', updatePassword);

export default router;