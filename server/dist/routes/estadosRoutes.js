"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoController_1 = require("../controllers/estadoController");
const router = (0, express_1.Router)();
// RUTAS CRUD ESTADOS DE ENTRADAS DE BLOG Y COMENTARIOS
router.get('/', estadoController_1.getEstado);
router.get('/:id', estadoController_1.getOneEstado);
router.delete('/:id', estadoController_1.deleteEstado);
router.post('/', estadoController_1.postEstado);
router.put('/:id', estadoController_1.updateEstado);
exports.default = router;
