import { Usuario } from "./usuario";

export class Cita{
    id: number=0;
    usuario: Usuario = new Usuario();
    fecha: string = "";
    hora: string = "";
}