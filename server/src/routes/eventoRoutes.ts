import {Router} from 'express';
import { deleteEvento, getEvento, getOneEvento, postEvento, updateEvento } from '../controllers/eventoController';

const router = Router();

// RUTAS CRUD EVENTOS
router.get('/', getEvento);
router.get('/:id', getOneEvento);
router.delete('/:id', deleteEvento);
router.post('/', postEvento);
router.put('/:id', updateEvento);

export default router;