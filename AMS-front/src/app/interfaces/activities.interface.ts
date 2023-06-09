export interface Activities {
    idActividad?: number;
    title: string;
    start: string;
    end: string;
    color?: string;
    id_Lugar: number;
    coordinador: number;
    nombre_coordinador?: string;
    nombre_lugar?: string;
    direccion_lugar?: string;
    aforo?: number;
    nombre_proveedor?: string;
    id_Proveedor?: number;
    idNuevaActividad?: number;
    id_Relacion_Proveedor?: number;
}