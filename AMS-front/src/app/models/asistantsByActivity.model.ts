import { AsistantsByActivity } from "../interfaces/asistantsByActivity.interface";
import { DNIResponse } from "../interfaces/dni.interface";

export class AsistantsByActivityModel implements AsistantsByActivity {

    idFallero: number;
    nombre: string;
    apellidos: string;

    constructor(response: AsistantsByActivity) {
        this.idFallero = response.idFallero;
        this.nombre = response.nombre;
        this.apellidos = response.apellidos;
    }
}