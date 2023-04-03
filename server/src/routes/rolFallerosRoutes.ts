import {Router} from 'express';
import { deleteRolFallero, getRolFallero, getOneRolFallero, postRolFallero, updateRolFallero } from '../controllers/rolFalleroController';

const router = Router();

// RUTAS CRUD ROLES FALLEROS
router.get('/', getRolFallero);
router.get('/:id', getOneRolFallero);
router.delete('/:id', deleteRolFallero);
router.post('/', postRolFallero);
router.put('/:id', updateRolFallero);

export default router;