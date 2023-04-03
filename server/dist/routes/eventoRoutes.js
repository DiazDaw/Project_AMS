"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventoController_1 = require("../controllers/eventoController");
const router = (0, express_1.Router)();
// RUTAS CRUD EVENTOS
router.get('/', eventoController_1.getEvento);
router.get('/:id', eventoController_1.getOneEvento);
router.delete('/:id', eventoController_1.deleteEvento);
router.post('/', eventoController_1.postEvento);
router.put('/:id', eventoController_1.updateEvento);
exports.default = router;
