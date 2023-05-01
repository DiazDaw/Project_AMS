export interface Fallero {
    idFallero: number;
    nombre: string;
    apellidos: string;
    fechaNac: Date;
    dni: string;
    telefono: string;
    fechaRegistro: Date;
    contrasenia: string;
    id_Rol_Gestion: number;
    id_Rol_Fallero: number;
    token: string;
}