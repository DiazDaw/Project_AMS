import { Places } from "../interfaces/places.interface";


export class PlacesModel implements Places {

    idLugar?: number;
    nombre: string;
    direccion: string;
    aforo: number;

    constructor(response: Places) {
        this.idLugar = response.idLugar;
        this.nombre = response.nombre;
        this.direccion = response.direccion;
        this.aforo = response.aforo;
    }

    
}