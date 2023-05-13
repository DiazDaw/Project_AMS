export interface LoginResponse {
    token: string;
    usuario: {
      idFallero: number;
      nombre: string;
      apellidos: string;
      dni: string;
      contrasenia: string;
      fechaNac: string;
      fechaRegistro: string;
      id_Rol_Fallero: number;
      id_Rol_Gestion: number;
      telefono: string;
    }
  }
  