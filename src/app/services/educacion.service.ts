import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  constructor(private http: HttpClient) {}
  url = 'https://backend-portfolio-florenciagalindezcasas.koyeb.app/educacion/';

  public crearEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.url}agregar`, educacion);
  }

  public listaEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.url}ver`);
  }
  public verEducacion(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.url}ver/${id}`);
  }
  public modificarEducacion(
    id?: number,
    educacion?: Educacion
  ): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.url}modificar/${id}`, educacion);
  }

  public eliminarEducacion(id: number): Observable<Educacion> {
    return this.http.delete<Educacion>(`${this.url}eliminar/${id}`);
  }
}
