"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const changePasswordController_1 = require("../controllers/changePasswordController");
const router = (0, express_1.Router)();
// RUTAS CRUD ASISTENTES
router.put('/:idFallero', changePasswordController_1.updatePassword);
exports.default = router;
