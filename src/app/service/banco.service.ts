import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Banco } from '../model/banco';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  private url7: string = `${environment.host7}`;
  private listaCambio = new Subject<Banco[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  
  listar(){
    return this.http.get<Banco[]>(this.url7);
  }
  insertar(receta: Banco) {
    return this.http.post(this.url7, receta);
  }
  setLista(listaNuevar: Banco[]) {
    this.listaCambio.next(listaNuevar);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(receta: Banco) {
    return this.http.put(this.url7 + "/" + receta.id, receta);
  }
  listarId(id: number) {
    return this.http.get<Banco>(`${this.url7}/${id}`);
  }  
  eliminar(id: number) {
    return this.http.delete(this.url7 + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Banco[]>(`${this.url7}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}
