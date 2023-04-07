import {Router} from 'express';
import { deleteRelacionActividadTarea, getRelacionActividadTarea, getOneRelacionActividadTarea, postRelacionActividadTarea, updateRelacionActividadTarea } from '../controllers/relacionActividadTareaController';

const router = Router();

// RUTAS CRUD ACTIVIDADES
router.get('/', getRelacionActividadTarea);
router.get('/:id', getOneRelacionActividadTarea);
router.delete('/:id', deleteRelacionActividadTarea);
router.post('/', postRelacionActividadTarea);
router.put('/:id', updateRelacionActividadTarea);

export default router;