import { FalleroResponse } from "../interfaces/fallero.interface";

export class FalleroModel {

    idFallero: number;
    nombre: string;
    apellidos: string;
    dni: string;
    fechaNac: string;
    fechaRegistro: string;
    id_Rol_Fallero: number;
    id_Rol_Gestion: number;
    telefono: string;

    constructor(response: FalleroResponse) {
        this.idFallero = response.idFallero;
        this.nombre = response.nombre;
        this.apellidos = response.apellidos;
        this.dni = response.dni;
        this.fechaNac = response.fechaNac;
        this.fechaRegistro = response.fechaRegistro;
        this.id_Rol_Fallero = response.id_Rol_Fallero;
        this.id_Rol_Gestion = response.id_Rol_Gestion;
        this.telefono = response.telefono;
    }
}