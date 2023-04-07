import {Router} from 'express';
import { deleteRelacionActividadProveedor, getOneRelacionActividadProveedor, getRelacionActividadProveedor, postRelacionActividadProveedor, updateRelacionActividadProveedor } from '../controllers/relacionActividadProveedorController';

const router = Router();

// RUTAS CRUD ACTIVIDADES
router.get('/', getRelacionActividadProveedor);
router.get('/:id', getOneRelacionActividadProveedor);
router.delete('/:id', deleteRelacionActividadProveedor);
router.post('/', postRelacionActividadProveedor);
router.put('/:id', updateRelacionActividadProveedor);

export default router;