"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entradaController_1 = require("../controllers/entradaController");
const comentarioController_1 = require("../controllers/comentarioController");
const router = (0, express_1.Router)();
// RUTAS CRUD ENTRADAS DE BLOG
router.get('/', entradaController_1.getEntrada);
router.get('/:id', entradaController_1.getOneEntrada);
router.delete('/:id', entradaController_1.deleteEntrada);
router.post('/', entradaController_1.postEntrada);
router.put('/:id', entradaController_1.updateEntrada);
//RUTAS CRUD COMENTARIOS
router.get('/:id/comentario/', comentarioController_1.getComentario);
router.get('/:id/comentario/:id', comentarioController_1.getOneComentario);
router.delete('/:id/comentario/:id', comentarioController_1.deleteComentario);
router.post('/:id/comentario/', comentarioController_1.postComentario);
router.put('/:id/comentario/:id', comentarioController_1.updateComentario);
exports.default = router;
