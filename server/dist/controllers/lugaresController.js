"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLugar = exports.postLugar = exports.deleteLugar = exports.getOneLugar = exports.getLugar = void 0;
//METODOS ACCESO REST API TABLA DE LUGARES
const getLugar = (req, res) => {
    res.json({
        msg: "Metodo getLugar"
    });
};
exports.getLugar = getLugar;
const getOneLugar = (req, res) => {
    res.json({
        msg: "Metodo getOneLugar"
    });
};
exports.getOneLugar = getOneLugar;
const deleteLugar = (req, res) => {
    res.json({
        msg: "Metodo deleteLugar",
        id: req.params
    });
};
exports.deleteLugar = deleteLugar;
const postLugar = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postLugar",
        body: req.body
    });
};
exports.postLugar = postLugar;
const updateLugar = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateLugar",
        body: req.body,
        id: req.params
    });
};
exports.updateLugar = updateLugar;
