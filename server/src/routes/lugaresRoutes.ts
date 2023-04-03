import {Router} from 'express';
import { deleteLugar, getLugar, getOneLugar, postLugar, updateLugar } from '../controllers/lugaresController';

const router = Router();

// RUTAS CRUD LUGARES
router.get('/', getLugar);
router.get('/:id', getOneLugar);
router.delete('/:id', deleteLugar);
router.post('/', postLugar);
router.put('/:id', updateLugar);

export default router;