import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Registroalimenticio } from '../model/registroalimenticio';

@Injectable({
  providedIn: 'root'
})
export class RegistroalimenticioService {
  private url6: string = `${environment.host6}`;
  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get<Registroalimenticio[]>(this.url6);
  }
}
