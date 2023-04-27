import {Router} from 'express';
import { deleteFallero, getFallero, getOne, postFallero, updateFallero } from '../controllers/falleroController';

const router = Router();

// RUTAS CRUD FALLEROS
router.get('/', getFallero);
router.get('/:id', getOne);
router.delete('/:id', deleteFallero);
router.post('/update', postFallero);
router.put('/:id', updateFallero);

export default router;