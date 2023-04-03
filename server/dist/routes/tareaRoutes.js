"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tareasController_1 = require("../controllers/tareasController");
const router = (0, express_1.Router)();
// RUTAS CRUD TAREAS DE VOLUNTARIOS
router.get('/', tareasController_1.getTarea);
router.get('/:id', tareasController_1.getOneTarea);
router.delete('/:id', tareasController_1.deleteTarea);
router.post('/', tareasController_1.postTarea);
router.put('/:id', tareasController_1.updateTarea);
exports.default = router;
