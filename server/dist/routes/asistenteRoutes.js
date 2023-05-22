"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asistenteController_1 = require("../controllers/asistenteController");
const router = (0, express_1.Router)();
// RUTAS CRUD ASISTENTES
router.get('/actividad/:id', asistenteController_1.getAsistente);
router.get('/:id', asistenteController_1.getOneAsistente);
router.delete('/fallero/:actividadId/actividad/:falleroId', asistenteController_1.deleteAsistente);
router.post('/', asistenteController_1.postAsistente);
router.put('/:id', asistenteController_1.updateAsistente);
exports.default = router;
