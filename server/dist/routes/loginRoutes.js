"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controllers/loginController");
const router = (0, express_1.Router)();
// RUTA LOGIN
router.get('/:dni/:contrasenia', loginController_1.login);
exports.default = router;
