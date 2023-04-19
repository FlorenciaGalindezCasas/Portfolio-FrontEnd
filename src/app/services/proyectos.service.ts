import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  constructor(private http: HttpClient) {}
  url = 'https://backend-portfolio-florenciagalindezcasas.koyeb.app/proyectos/';

  public crearProyecto(proyectos: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(`${this.url}agregar`, proyectos);
  }

  public verProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.url}ver`);
  }

  public verProyecto(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(`${this.url}ver/${id}`);
  }

  public modificarProyecto(
    id?: number,
    proyectos?: Proyectos
  ): Observable<Proyectos> {
    return this.http.put<Proyectos>(`${this.url}modificar/${id}`, proyectos);
  }

  public eliminarProyecto(id: number): Observable<Proyectos> {
    return this.http.delete<Proyectos>(`${this.url}eliminar/${id}`);
  }
}
