"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const falleroController_1 = require("../controllers/falleroController");
const router = (0, express_1.Router)();
// RUTAS CRUD FALLEROS
router.post('/', falleroController_1.getFallero);
router.get('/:id', falleroController_1.getOne);
router.delete('/:id', falleroController_1.deleteFallero);
router.post('/update', falleroController_1.postFallero);
router.put('/:id', falleroController_1.updateFallero);
exports.default = router;
