import {Router} from 'express';
import { getTarea, deleteTarea, getOneTarea, postTarea, updateTarea } from '../controllers/tareasController';

const router = Router();

// RUTAS CRUD TAREAS DE VOLUNTARIOS
router.get('/', getTarea);
router.get('/:id', getOneTarea);
router.delete('/:id', deleteTarea);
router.post('/', postTarea);
router.put('/:id', updateTarea);

export default router;