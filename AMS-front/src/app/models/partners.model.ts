import { Partners } from "../interfaces/partners.interface";


export class PartnersModel implements Partners {

    idProveedor?: number;
    nombre: string;
    producto: string;
    cif: string;
    email: string;
    direccion: string;
    telefono: string;

    constructor(response: Partners) {
        this.idProveedor = response.idProveedor;
        this.nombre = response.nombre;
        this.producto = response.producto;
        this.cif = response.cif;
        this.email = response.email;
        this.direccion = response.direccion;
        this.telefono = response.telefono;
        
    }

    
}