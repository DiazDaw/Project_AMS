import express from 'express';
import cors from 'cors';

import routesFalleros from '../routes/falleroRoutes';
import routesEventos from '../routes/eventoRoutes';
import routesLugares from '../routes/lugaresRoutes';
import routesProveedores from '../routes/proveedoresRoutes';
import routesAsistentes from '../routes/asistenteRoutes';
import routesRolesFalleros from '../routes/rolFallerosRoutes';
import routesRolesGestion from '../routes/rolGestionRoutes';
import routesTareas from '../routes/tareaRoutes';
import routesActividades from '../routes/actividadesRoutes';
import routesEstados from '../routes/estadosRoutes';
import routesRelacionActividadTarea from '../routes/relacionActividadTareaRoutes';
import routesRelacionActividadProveedor from '../routes/relacionActividadProveedorRoutes';
import routesEntradasComentarios from '../routes/entradasComentariosRoutes';
import routesFalleroActividad from '../routes/relacionFalleroActividadRoutes';
import routesFalleroTareas from '../routes/relacionFalleroTareasRoutes';
import routesLogin from '../routes/loginRoutes';
import routesDNI from '../routes/dniRoutes';
import routesPassword from '../routes/changePasswordRoutes';

import connection from '../db/connection';

class Server {

    private app: express.Application;
    private port: string;
    // private jwt = require('jsonwebtoken');

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '4000'
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Aplicación en el puerto", this.port);
        })
    }

    //ENDPOINT PARA CRUDS
    routes(){
        //RUTAS PARA FALLEROS Y ROLES
        this.app.use('/api/falleros', routesFalleros);
        this.app.use('/api/falleros/roles/gestion', routesRolesGestion);
        this.app.use('/api/falleros/roles/comision', routesRolesFalleros);
        this.app.use('/api/falleros/tareas', routesFalleroTareas);
        this.app.use('/api/dni', routesDNI);

        //RUTAS PARA EVENTOS
        this.app.use('/api/eventos', routesEventos);
        this.app.use('/api/actividades', routesActividades);
        this.app.use('/api/actividades/tareas', routesRelacionActividadTarea);
        this.app.use('/api/actividades/proveedor', routesRelacionActividadProveedor);
        this.app.use('/api/asistentes', routesAsistentes);
        this.app.use('/api/tareas', routesTareas);
        this.app.use('/api/lugares', routesLugares);
        this.app.use('/api/proveedores', routesProveedores);
        this.app.use('/api/actividades/falleros', routesFalleroActividad);

        //RUTAS PARA BLOG
        this.app.use('/api/blog/entradas', routesEntradasComentarios);
        this.app.use('/api/blog/estado', routesEstados);
        this.app.use('/api/login', routesLogin);

        //RUTA PARA CAMBIAR PASSWORD
        this.app.use('/api/contrasenia', routesPassword);

    }

    //METODOS PARA EJECUTAR ANTES DE QUE LA PETICION LLEGUE AL SERVIDOR Y EVITAR FALLO. SE USA EN EL CONSTRUCTOR ANTES DE USAR EL METODO ROUTES
    middlewares(){
        //PASAR EL BODY DE LA PETICION A JSON
        this.app.use(express.json());

        //CORS
        this.app.use(cors());
    }

    conectarDB(){
        connection.connect((err) => {
            if(err) throw err;
            console.log('Conectado correctamente a la Base de Datos');
        })
    }
} 

export default Server;