import {Router} from 'express';
import { deleteActividad, getActividad, getOneActividad, postActividad, updateActividad } from '../controllers/actividadController';
import { deleteAsistente, getAsistente, getOneAsistente, postAsistente, updateAsistente } from '../controllers/asistenteController';

const router = Router();

// RUTAS CRUD ACTIVIDADES
router.get('/', getActividad);
router.get('/:id', getOneActividad);
router.delete('/:id', deleteActividad);
router.post('/', postActividad);
router.put('/:id', updateActividad);

//RUTAS CRUD ASISTENTES

router.get('/:id/asistentes', getAsistente);
router.get('/:id/asistentes/:id', getOneAsistente);
router.delete('/:id/asistentes/:id', deleteAsistente);
router.post(':id/asistentes', postAsistente);
router.put('/:id/asistentes/:id', updateAsistente);

export default router;