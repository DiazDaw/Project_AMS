import { Activities } from "../interfaces/activities.interface";


export class ActivitiesModel implements Activities {

    idActividad?: number;
    title: string;
    start: string;
    end: string;
    color?: string;
    id_Lugar: number;
    coordinador: number;
    nombre_coordinador?: string;
    nombre_lugar?: string;
    direccion_lugar?:string;
    aforo?: number;
    nombre_proveedor?: string;
    id_Proveedor?: number;
    idNuevaActividad?: number;
    id_Relacion_Proveedor?: number;

    constructor(response: Activities) {
        this.idActividad= response.idActividad;
        this.title = response.title;
        this.start = response.start;
        this.end = response.end;
        this.color = response.color;
        this.id_Lugar = response.id_Lugar;
        this.coordinador = response.coordinador;
        this.nombre_coordinador = response.nombre_coordinador;
        this.nombre_lugar = response.nombre_lugar;
        this.direccion_lugar = response.direccion_lugar;
        this.aforo = response.aforo;
        this.nombre_proveedor = response.nombre_proveedor;
        this.id_Proveedor = response.id_Proveedor;
        this.idNuevaActividad = response.idNuevaActividad;
        this.id_Relacion_Proveedor = response.id_Relacion_Proveedor;
    }

    
}