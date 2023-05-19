import { RolesFallero } from "../interfaces/rolesFallero.interface";

export class RolesFalleroModel implements RolesFallero {

    idRolFallero: number;
    nombreRolFallero: string;

    constructor(response: RolesFallero) {
        this.idRolFallero = response.idRolFallero;
        this.nombreRolFallero = response.nombreRolFallero;
    }
}