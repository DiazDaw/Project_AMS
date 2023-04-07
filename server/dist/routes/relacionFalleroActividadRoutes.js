"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const relacionFalleroActividadController_1 = require("../controllers/relacionFalleroActividadController");
const router = (0, express_1.Router)();
// RUTAS CRUD ACTIVIDADES
router.get('/', relacionFalleroActividadController_1.getRelacionFalleroActividad);
router.get('/:id', relacionFalleroActividadController_1.getOneRelacionFalleroActividad);
router.delete('/:id', relacionFalleroActividadController_1.deleteRelacionFalleroActividad);
router.post('/', relacionFalleroActividadController_1.postRelacionFalleroActividad);
router.put('/:id', relacionFalleroActividadController_1.updateRelacionFalleroActividad);
exports.default = router;
