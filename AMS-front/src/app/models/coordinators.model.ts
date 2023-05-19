import { Coordinators } from "../interfaces/coordinators.interface";


export class CoordinatorsModel implements Coordinators {

    idActividad?: number;
    title: string;
    nombre_coordinador: string;
    

    constructor(response: Coordinators) {
        this.idActividad = response.idActividad;
        this.title = response.title;
        this.nombre_coordinador = response.nombre_coordinador;
    }
}