import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url1: string = `${environment.host1}`;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Usuario[]>(this.url1);
  }
}
