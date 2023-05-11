import { DNIResponse } from "../interfaces/dni.interface";

export class DNIModel implements DNIResponse {

    dni: string;

    constructor(response: DNIResponse) {
        this.dni= response.dni;
    }
}