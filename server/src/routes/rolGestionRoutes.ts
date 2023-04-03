import {Router} from 'express';
import { getRolGestion, deleteRolGestion, getOneRolGestion, postRolGestion, updateRolGestion } from '../controllers/rolGestionController';

const router = Router();

// RUTAS CRUD ROLES DE GESTION
router.get('/', getRolGestion);
router.get('/:id', getOneRolGestion);
router.delete('/:id', deleteRolGestion);
router.post('/', postRolGestion);
router.put('/:id', updateRolGestion);

export default router;