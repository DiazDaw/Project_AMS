"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentarioController_1 = require("../controllers/comentarioController");
const router = (0, express_1.Router)();
//RUTAS CRUD COMENTARIOS
router.get('/', comentarioController_1.getComentario);
router.get('/:id_Entrada/comentario', comentarioController_1.getComentarioFromEntrada);
router.get('/:id_Entrada/comentario/:idComentario', comentarioController_1.getOneComentario);
router.delete('/:id', comentarioController_1.deleteComentario);
router.post('/', comentarioController_1.postComentario);
router.put('/:id', comentarioController_1.updateComentario);
exports.default = router;
