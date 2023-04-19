import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logueado = false;
  personas: Persona[] | undefined;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.verPersonas();
    if (this.tokenService.getToken()) {
      this.logueado = true;
    } else {
      this.logueado = false;
    }
  }

  verPersonas(): void {
    this.personaService.verPersonas().subscribe((dato) => {
      this.personas = dato;
    });
  }

  modificarPersona(id: number) {
    this.router.navigate(['persona/modificar/', id]);
  }
}
