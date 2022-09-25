import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receta } from '../model/receta';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private url4: string = `${environment.host4}`;
  private listaCambio = new Subject<Receta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Receta[]>(this.url4);
  }
  insertar(receta: Receta) {
    return this.http.post(this.url4, receta);
  }
  setLista(listaNuevar: Receta[]) {
    this.listaCambio.next(listaNuevar);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(receta: Receta) {
    return this.http.put(this.url4 + "/" + receta.id, receta);
  }
  listarId(id: number) {
    return this.http.get<Receta>(`${this.url4}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url4 + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Receta[]>(`${this.url4}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }  
}
