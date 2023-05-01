import { Fallero } from '../interfaces/fallero.interface';

export class FalleroModel implements Fallero {
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

  constructor(fallero: Fallero) {
    this.idFallero = fallero.idFallero;
    this.nombre = fallero.nombre;
    this.apellidos = fallero.apellidos;
    this.fechaNac = fallero.fechaNac;
    this.dni = fallero.dni;
    this.telefono = fallero.telefono;
    this.fechaRegistro = fallero.fechaRegistro;
    this.contrasenia = fallero.contrasenia;
    this.id_Rol_Gestion = fallero.id_Rol_Gestion;
    this.id_Rol_Fallero = fallero.id_Rol_Fallero;
    this.token = fallero.token;
  }
}
