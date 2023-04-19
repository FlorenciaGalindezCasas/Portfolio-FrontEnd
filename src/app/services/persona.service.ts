import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private http: HttpClient) {}
  url = 'https://backend-portfolio-florenciagalindezcasas.koyeb.app/persona/';

  public crearPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.url}agregar`, persona);
  }
  public verPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.url}ver`);
  }
  public verPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}ver/${id}`);
  }
  public modificarPersona(id?: number, persona?: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.url}modificar/${id}`, persona);
  }
  public eliminarPersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(`${this.url}eliminar/${id}`);
  }
}
