"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entradaController_1 = require("../controllers/entradaController");
const router = (0, express_1.Router)();
// RUTAS CRUD ENTRADAS DE BLOG
router.get('/', entradaController_1.getEntrada);
router.get('/:id', entradaController_1.getOneEntrada);
router.delete('/:id', entradaController_1.deleteEntrada);
router.post('/', entradaController_1.postEntrada);
router.put('/:id', entradaController_1.updateEntrada);
exports.default = router;
