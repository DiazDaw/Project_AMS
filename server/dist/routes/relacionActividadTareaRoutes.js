"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const relacionActividadTareaController_1 = require("../controllers/relacionActividadTareaController");
const router = (0, express_1.Router)();
// RUTAS CRUD ACTIVIDADES
router.get('/', relacionActividadTareaController_1.getRelacionActividadTarea);
router.get('/:id', relacionActividadTareaController_1.getOneRelacionActividadTarea);
router.delete('/:id', relacionActividadTareaController_1.deleteRelacionActividadTarea);
router.post('/', relacionActividadTareaController_1.postRelacionActividadTarea);
router.put('/:id', relacionActividadTareaController_1.updateRelacionActividadTarea);
exports.default = router;
