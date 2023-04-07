"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const relacionActividadProveedorController_1 = require("../controllers/relacionActividadProveedorController");
const router = (0, express_1.Router)();
// RUTAS CRUD ACTIVIDADES
router.get('/', relacionActividadProveedorController_1.getRelacionActividadProveedor);
router.get('/:id', relacionActividadProveedorController_1.getOneRelacionActividadProveedor);
router.delete('/:id', relacionActividadProveedorController_1.deleteRelacionActividadProveedor);
router.post('/', relacionActividadProveedorController_1.postRelacionActividadProveedor);
router.put('/:id', relacionActividadProveedorController_1.updateRelacionActividadProveedor);
exports.default = router;
