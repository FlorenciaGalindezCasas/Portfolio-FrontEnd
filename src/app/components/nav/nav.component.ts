import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  logueado = false;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.logueado = true;
    } else {
      this.logueado = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  login() {
    this.router.navigate(['login']);
  }
}
