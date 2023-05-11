"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const falleroRoutes_1 = __importDefault(require("../routes/falleroRoutes"));
const eventoRoutes_1 = __importDefault(require("../routes/eventoRoutes"));
const lugaresRoutes_1 = __importDefault(require("../routes/lugaresRoutes"));
const proveedoresRoutes_1 = __importDefault(require("../routes/proveedoresRoutes"));
const asistenteRoutes_1 = __importDefault(require("../routes/asistenteRoutes"));
const rolFallerosRoutes_1 = __importDefault(require("../routes/rolFallerosRoutes"));
const rolGestionRoutes_1 = __importDefault(require("../routes/rolGestionRoutes"));
const tareaRoutes_1 = __importDefault(require("../routes/tareaRoutes"));
const actividadesRoutes_1 = __importDefault(require("../routes/actividadesRoutes"));
const estadosRoutes_1 = __importDefault(require("../routes/estadosRoutes"));
const relacionActividadTareaRoutes_1 = __importDefault(require("../routes/relacionActividadTareaRoutes"));
const relacionActividadProveedorRoutes_1 = __importDefault(require("../routes/relacionActividadProveedorRoutes"));
const entradasComentariosRoutes_1 = __importDefault(require("../routes/entradasComentariosRoutes"));
const relacionFalleroActividadRoutes_1 = __importDefault(require("../routes/relacionFalleroActividadRoutes"));
const relacionFalleroTareasRoutes_1 = __importDefault(require("../routes/relacionFalleroTareasRoutes"));
const loginRoutes_1 = __importDefault(require("../routes/loginRoutes"));
const dniRoutes_1 = __importDefault(require("../routes/dniRoutes"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    // private jwt = require('jsonwebtoken');
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicación en el puerto", this.port);
        });
    }
    //ENDPOINT PARA CRUDS
    routes() {
        //RUTAS PARA FALLEROS Y ROLES
        this.app.use('/api/falleros', falleroRoutes_1.default);
        this.app.use('/api/falleros/roles/gestion', rolGestionRoutes_1.default);
        this.app.use('/api/falleros/roles/comision', rolFallerosRoutes_1.default);
        this.app.use('/api/falleros/tareas', relacionFalleroTareasRoutes_1.default);
        this.app.use('/api/dni', dniRoutes_1.default);
        //RUTAS PARA EVENTOS
        this.app.use('/api/eventos', eventoRoutes_1.default);
        this.app.use('/api/actividades', actividadesRoutes_1.default);
        this.app.use('/api/actividades/tareas', relacionActividadTareaRoutes_1.default);
        this.app.use('/api/actividades/proveedor', relacionActividadProveedorRoutes_1.default);
        this.app.use('/api/asistentes', asistenteRoutes_1.default);
        this.app.use('/api/tareas', tareaRoutes_1.default);
        this.app.use('/api/lugares', lugaresRoutes_1.default);
        this.app.use('/api/proveedores', proveedoresRoutes_1.default);
        this.app.use('/api/actividades/falleros', relacionFalleroActividadRoutes_1.default);
        //RUTAS PARA BLOG
        this.app.use('/api/blog/entradas', entradasComentariosRoutes_1.default);
        this.app.use('/api/blog/estado', estadosRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
    }
    //METODOS PARA EJECUTAR ANTES DE QUE LA PETICION LLEGUE AL SERVIDOR Y EVITAR FALLO. SE USA EN EL CONSTRUCTOR ANTES DE USAR EL METODO ROUTES
    middlewares() {
        //PASAR EL BODY DE LA PETICION A JSON
        this.app.use(express_1.default.json());
        //CORS
        this.app.use((0, cors_1.default)());
    }
    conectarDB() {
        connection_1.default.connect((err) => {
            if (err)
                throw err;
            console.log('Conectado correctamente a la Base de Datos');
        });
    }
}
exports.default = Server;
