import { Coments } from "../interfaces/coments.interface";



export class ComentsModel implements Coments {

    idComentario?: number;
    titulo: string;
    contenido: string;
    fechaCreacion: string;
    autor?: number;
    id_Estado: number;
    id_Entrada?: number;
    nombre_autor?: string;
    nombre_estado?: string;
    apellidos_autor?: string;
    

    constructor(response: Coments) {
        this.idComentario = response.idComentario;
        this.titulo = response.titulo;
        this.contenido = response.contenido;
        this.fechaCreacion = response.fechaCreacion;
        this.autor = response.autor;
        this.id_Estado = response.id_Estado;
        this.id_Entrada = response.id_Entrada;
        this.nombre_autor = response.nombre_autor;
        this.nombre_estado = response.nombre_estado;
        this.apellidos_autor = response.apellidos_autor;
    }

    
}