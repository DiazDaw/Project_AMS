"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedoresController_1 = require("../controllers/proveedoresController");
const router = (0, express_1.Router)();
// RUTAS CRUD PROVEEDORES
router.get('/', proveedoresController_1.getProveedor);
router.get('/:id', proveedoresController_1.getOneProveedor);
router.delete('/:id', proveedoresController_1.deleteProveedor);
router.post('/', proveedoresController_1.postProveedor);
router.put('/:id', proveedoresController_1.updateProveedor);
exports.default = router;
