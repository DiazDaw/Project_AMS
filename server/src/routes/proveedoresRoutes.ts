import {Router} from 'express';
import { getProveedor, deleteProveedor, getOneProveedor, postProveedor, updateProveedor } from '../controllers/proveedoresController';

const router = Router();

// RUTAS CRUD PROVEEDORES
router.get('/', getProveedor);
router.get('/:id', getOneProveedor);
router.delete('/:id', deleteProveedor);
router.post('/', postProveedor);
router.put('/:id', updateProveedor);

export default router;