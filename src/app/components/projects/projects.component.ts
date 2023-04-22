import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  logueado = false;
  proyectos: Proyectos[] | undefined;

  constructor(
    private proyectosService: ProyectosService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.verProyectos();
    if (this.tokenService.getToken()) {
      this.logueado = true;
    } else {
      this.logueado = false;
    }
  }

  verProyectos(): void {
    this.proyectosService.verProyectos().subscribe((dato) => {
      this.proyectos = dato;
    });
  }

  crearProyecto() {
    // this.router.navigate(['proyectos/agregar']);
  }

  modificarProyecto(id: number) {
    this.router.navigate(['proyectos/modificar/', id]);
  }

  eliminarProyecto(id: number) {
    this.proyectosService.eliminarProyecto(id).subscribe((data) => {
      this.proyectos = this.proyectos?.filter(
        (proyectos) => proyectos.id !== id
      );
    });
    setTimeout(() => {
      alert('Proyecto eliminado');
      window.location.reload();
    }, 0);
  }
}
