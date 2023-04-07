import {Router} from 'express';
import { getOneRelacionFalleroTarea, getRelacionFalleroTarea, deleteRelacionFalleroTarea, postRelacionFalleroTarea, updateRelacionFalleroTarea } from '../controllers/relacionFalleroTareasController';

const router = Router();

// RUTAS CRUD ACTIVIDADES
router.get('/', getRelacionFalleroTarea);
router.get('/:id', getOneRelacionFalleroTarea);
router.delete('/:id', deleteRelacionFalleroTarea);
router.post('/', postRelacionFalleroTarea);
router.put('/:id', updateRelacionFalleroTarea);

export default router;