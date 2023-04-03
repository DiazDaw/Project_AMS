"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTarea = exports.postTarea = exports.deleteTarea = exports.getOneTarea = exports.getTarea = void 0;
//METODOS ACCESO REST API TABLA DE TAREAS DE VOLUNTARIOS
const getTarea = (req, res) => {
    res.json({
        msg: "Metodo getTarea"
    });
};
exports.getTarea = getTarea;
const getOneTarea = (req, res) => {
    res.json({
        msg: "Metodo getOneTarea"
    });
};
exports.getOneTarea = getOneTarea;
const deleteTarea = (req, res) => {
    console.log(req.params);
    res.json({
        msg: "Metodo deleteTarea",
        id: req.params
    });
};
exports.deleteTarea = deleteTarea;
const postTarea = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Metodo postTarea",
        body: req.body
    });
};
exports.postTarea = postTarea;
const updateTarea = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.json({
        msg: "Metodo updateTarea",
        body: req.body,
        id: req.params
    });
};
exports.updateTarea = updateTarea;
