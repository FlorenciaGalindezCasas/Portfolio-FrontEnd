import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  logueado = false;
  logueadoFail = false;
  login!: Login;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.logueado= true;
      this.logueadoFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.login = new Login(this.userName, this.password);
    this.authService.login(this.login).subscribe(
      (data) => {
        this.logueado = true;
        this.logueadoFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
      },
      (err) => {
        this.logueado = false;
        this.logueadoFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
    );
  }
}
