import { ActivityByUser } from "../interfaces/activityByUser.interface";


export class ActivityByUserModel implements ActivityByUser {

    id_Actividad: number;
    title: number;
    start: string;
    end: string;

    constructor(response: ActivityByUser) {
        this.id_Actividad = response.id_Actividad;
        this.title = response.title;
        this.start = response.start;
        this.end = response.end;
    }
}