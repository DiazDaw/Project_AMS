import {Router} from 'express';
import { deleteAsistente, getAsistente, getOneAsistente, postAsistente, updateAsistente } from '../controllers/asistenteController';

const router = Router();

// RUTAS CRUD ASISTENTES
router.get('/actividad/:id', getAsistente);
router.get('/:id', getOneAsistente);
router.delete('/:id', deleteAsistente);
router.post('/', postAsistente);
router.put('/:id', updateAsistente);

export default router;