import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}
  url =
    'https://backend-portfolio-florenciagalindezcasas.koyeb.app/habilidades/';

  public crearSkill(skills: Skills): Observable<Skills> {
    return this.http.post<Skills>(`${this.url}agregar`, skills);
  }

  public verSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.url}ver`);
  }

  public verSkill(id: number): Observable<Skills> {
    return this.http.get<Skills>(`${this.url}ver/${id}`);
  }

  public modificarSkill(id?: number, skills?: Skills): Observable<Skills> {
    return this.http.put<Skills>(`${this.url}modificar/${id}`, skills);
  }

  public eliminarSkill(id: number): Observable<Skills> {
    return this.http.delete<Skills>(`${this.url}eliminar/${id}`);
  }
}
