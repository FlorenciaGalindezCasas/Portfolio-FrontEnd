import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  logueado = false;
  educacion: Educacion[] | undefined;

  constructor(
    private educacionService: EducacionService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listaEducacion();
    if (this.tokenService.getToken()) {
      this.logueado = true;
    } else {
      this.logueado = false;
    }
  }

  listaEducacion(){
    this.educacionService.listaEducacion().subscribe((dato) => {
      this.educacion = dato;
    });
  }

  crearEducacion() {
    this.router.navigate(['educacion/agregar']);
  }

  modificarEducacion(id: number) {
    this.router.navigate(['educacion/modificar/', id]);
  }

  eliminarEducacion(id: number) {
    this.educacionService.eliminarEducacion(id).subscribe((data) => {
      this.educacion = this.educacion?.filter(
        (educacion) => educacion.id !== id
      );
    });
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }
}
