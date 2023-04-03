"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolGestionController_1 = require("../controllers/rolGestionController");
const router = (0, express_1.Router)();
// RUTAS CRUD ROLES DE GESTION
router.get('/', rolGestionController_1.getRolGestion);
router.get('/:id', rolGestionController_1.getOneRolGestion);
router.delete('/:id', rolGestionController_1.deleteRolGestion);
router.post('/', rolGestionController_1.postRolGestion);
router.put('/:id', rolGestionController_1.updateRolGestion);
exports.default = router;
