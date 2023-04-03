import express from 'express';
import cors from 'cors';

import routesFalleros from '../routes/falleroRoutes';
import routesEventos from '../routes/eventoRoutes';
import routesLugares from '../routes/lugaresRoutes';
import routesProveedores from '../routes/proveedoresRoutes';
import routesComentarios from '../routes/comentarioRoutes';
import routesAsistentes from '../routes/asistenteRoutes';
import routesEntradas from '../routes/entradaRoutes';
import routesRolesFalleros from '../routes/rolFallerosRoutes';
import routesRolesGestion from '../routes/rolGestionRoutes';
import routesTareas from '../routes/tareaRoutes';
import routesActividades from '../routes/actividadesRoutes';
import routesEstados from '../routes/estadosRoutes';

import connection from '../db/connection';

class Server {

    private app: express.Application;
    private port: string;

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

        //RUTAS PARA EVENTOS
        this.app.use('/api/eventos', routesEventos);
        this.app.use('/api/actividades', routesActividades);
        this.app.use('/api/asistentes', routesAsistentes);
        this.app.use('/api/tareas', routesTareas);
        this.app.use('/api/lugares', routesLugares);
        this.app.use('/api/proveedores', routesProveedores);

        //RUTAS PARA BLOG
        this.app.use('/api/blog/entradas', routesEntradas);
        this.app.use('/api/blog/entradas/comentarios', routesComentarios);
        this.app.use('/api/blog/estado', routesEstados);

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