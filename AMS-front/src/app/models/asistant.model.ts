import { Asistants } from "../interfaces/asistants.interface";


export class AsistantsModel implements Asistants {

    idRelacion?: number;
    id_Fallero?: number;
    id_Actividad: number;
    

    constructor(response: Asistants) {
        this.idRelacion = response.idRelacion;
        this.id_Fallero = response.id_Fallero;
        this.id_Actividad = response.id_Actividad;

    }

    
}