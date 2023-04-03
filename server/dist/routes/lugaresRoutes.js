"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lugaresController_1 = require("../controllers/lugaresController");
const router = (0, express_1.Router)();
// RUTAS CRUD LUGARES
router.get('/', lugaresController_1.getLugar);
router.get('/:id', lugaresController_1.getOneLugar);
router.delete('/:id', lugaresController_1.deleteLugar);
router.post('/', lugaresController_1.postLugar);
router.put('/:id', lugaresController_1.updateLugar);
exports.default = router;
