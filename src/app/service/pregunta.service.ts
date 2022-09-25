import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pregunta } from '../model/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private url2: string = `${environment.host2}`;
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Pregunta[]>(this.url2);
  }
}
