"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entradasComentariosController_1 = require("../controllers/entradasComentariosController");
const router = (0, express_1.Router)();
// RUTAS CRUD ENTRADAS DE BLOG
router.get('/', entradasComentariosController_1.getEntrada);
router.get('/:id', entradasComentariosController_1.getOneEntrada);
router.delete('/:id', entradasComentariosController_1.deleteEntrada);
router.post('/', entradasComentariosController_1.postEntrada);
router.put('/:id', entradasComentariosController_1.updateEntrada);
//RUTAS CRUD COMENTARIOS
router.get('/comentario', entradasComentariosController_1.getAllComentario); //NO FUNCIONA
router.get('/:id_Entrada/comentario', entradasComentariosController_1.getComentarioFromEntrada); //Funcionara si pongo ? en id_Entrada
router.get('/:id_Entrada/comentario/:idComentario', entradasComentariosController_1.getOneComentario);
router.delete('/comentario/:id', entradasComentariosController_1.deleteComentario);
router.post('/comentario', entradasComentariosController_1.postComentario);
router.put('/comentario/:id', entradasComentariosController_1.updateComentario);
exports.default = router;
