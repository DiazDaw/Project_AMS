"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolFalleroController_1 = require("../controllers/rolFalleroController");
const router = (0, express_1.Router)();
// RUTAS CRUD ROLES FALLEROS
router.get('/', rolFalleroController_1.getRolFallero);
router.get('/:id', rolFalleroController_1.getOneRolFallero);
router.delete('/:id', rolFalleroController_1.deleteRolFallero);
router.post('/', rolFalleroController_1.postRolFallero);
router.put('/:id', rolFalleroController_1.updateRolFallero);
exports.default = router;
