import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { JwtDto } from '../model/jwtdto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'https://backend-portfolio-florenciagalindezcasas.koyeb.app/auth/';

  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(`${this.authUrl}new`, nuevoUsuario);
  }

  public login(login: Login): Observable<any> {
    return this.httpClient.post<JwtDto>(`${this.authUrl}login`, login);
  }
}
