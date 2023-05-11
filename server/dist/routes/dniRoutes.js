"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dniController_1 = require("../controllers/dniController");
const router = (0, express_1.Router)();
// RUTAS CRUD FALLEROS
router.get('/', dniController_1.getDNIFallero);
exports.default = router;
