import {Router} from 'express';
import { deleteRelacionFalleroActividad, getOneRelacionFalleroActividad, getRelacionFalleroActividad, postRelacionFalleroActividad, updateRelacionFalleroActividad } from '../controllers/relacionFalleroActividadController';

const router = Router();

// RUTAS CRUD ACTIVIDADES
router.get('/', getRelacionFalleroActividad);
router.get('/:id', getOneRelacionFalleroActividad);
router.delete('/:id', deleteRelacionFalleroActividad);
router.post('/', postRelacionFalleroActividad);
router.put('/:id', updateRelacionFalleroActividad);

export default router;