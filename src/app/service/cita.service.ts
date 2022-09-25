import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private url8: string = `${environment.host8}`;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Cita[]>(this.url8);
  }
}
