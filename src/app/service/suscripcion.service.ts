import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Suscripcion } from '../model/suscripcion';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private url9: string = `${environment.host9}`;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Suscripcion[]>(this.url9);
  }
}
