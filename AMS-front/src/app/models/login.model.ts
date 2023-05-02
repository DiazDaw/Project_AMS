import { LoginResponse } from "../interfaces/login.interface";

export class LoginResponseModel {
    token: string;
    usuario: {
      idFallero: number;
      nombre: string;
      apellidos: string;
      dni: string;
      fechaNac: string;
      fechaRegistro: string;
      id_Rol_Fallero: number;
      id_Rol_Gestion: number;
      telefono: string;
    }
  
    constructor(response: LoginResponse) {
      this.token = response.token;
      this.usuario = response.usuario;
    }
  }