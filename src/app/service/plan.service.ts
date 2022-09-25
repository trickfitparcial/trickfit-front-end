import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../model/plan';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private url3: string = `${environment.host3}`;
  private listaCambio = new Subject<Plan[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http:HttpClient) { }
  listar() {
    return this.http.get<Plan[]>(this.url3);
  }
  insertar(plan: Plan) {
    return this.http.post(this.url3, plan);
  }
  setLista(listaNueva: Plan[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(plan: Plan) {
    return this.http.put(this.url3 + "/" + plan.id, plan);
  }
  listarId(id: number) {
    return this.http.get<Plan>(`${this.url3}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url3 + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Plan[]>(`${this.url3}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }
}
