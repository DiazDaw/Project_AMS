import { RolesGestion } from "../interfaces/rolesGestion.interface";

export class RolesGestionModel implements RolesGestion {

    idRolGestion: number;
    nombreRolGestion: string;

    constructor(response: RolesGestion) {
        this.idRolGestion = response.idRolGestion;
        this.nombreRolGestion = response.nombreRolGestion;
    }
}