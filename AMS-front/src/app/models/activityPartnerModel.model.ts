
import { ActivityPartner } from "../interfaces/activityPartner.interface";


export class ActivityPartnerModel implements ActivityPartner {

    id_Relacion?: number;
    id_Actividad?: number;
    id_Proveedor: number;

    constructor(response: ActivityPartner) {
        this.id_Relacion = response.id_Relacion;
        this.id_Actividad = response.id_Actividad;
        this.id_Proveedor = response.id_Proveedor;
    }
}