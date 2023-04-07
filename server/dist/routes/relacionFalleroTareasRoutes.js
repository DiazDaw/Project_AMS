"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const relacionFalleroTareasController_1 = require("../controllers/relacionFalleroTareasController");
const router = (0, express_1.Router)();
// RUTAS CRUD ACTIVIDADES
router.get('/', relacionFalleroTareasController_1.getRelacionFalleroTarea);
router.get('/:id', relacionFalleroTareasController_1.getOneRelacionFalleroTarea);
router.delete('/:id', relacionFalleroTareasController_1.deleteRelacionFalleroTarea);
router.post('/', relacionFalleroTareasController_1.postRelacionFalleroTarea);
router.put('/:id', relacionFalleroTareasController_1.updateRelacionFalleroTarea);
exports.default = router;
