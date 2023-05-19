"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actividadController_1 = require("../controllers/actividadController");
const asistenteController_1 = require("../controllers/asistenteController");
const router = (0, express_1.Router)();
// RUTAS CRUD ACTIVIDADES
router.get('/', actividadController_1.getActividad);
router.get('/:id', actividadController_1.getOneActividad);
router.get('/coordinador/:id', actividadController_1.getCoordinador);
router.delete('/:id', actividadController_1.deleteActividad);
router.post('/', actividadController_1.postActividad);
router.put('/:id', actividadController_1.updateActividad);
//RUTAS CRUD ASISTENTES
router.get('/:id/asistentes', asistenteController_1.getAsistente);
router.get('/:id/asistentes/:id', asistenteController_1.getOneAsistente);
router.delete('/:id/asistentes/:id', asistenteController_1.deleteAsistente);
router.post(':id/asistentes', asistenteController_1.postAsistente);
router.put('/:id/asistentes/:id', asistenteController_1.updateAsistente);
exports.default = router;
