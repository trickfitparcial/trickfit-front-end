import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Alimento } from '../model/alimento';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {
  private url: string = `${environment.host}`;
  private listaCambio = new Subject<Alimento[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) {}
  listar(){
    return this.http.get<Alimento[]>(this.url);
  }
  insertar(alimento: Alimento) {
    return this.http.post(this.url, alimento);
  }
  setLista(listaNueva: Alimento[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(alimento: Alimento) {
    return this.http.put(this.url + "/" + alimento.id, alimento);
  }
  listarId(id: string) {
    return this.http.get<Alimento>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Alimento[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
