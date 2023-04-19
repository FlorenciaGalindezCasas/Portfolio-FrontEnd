import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-projects-edit',
  templateUrl: './projects-edit.component.html',
  styleUrls: ['./projects-edit.component.css'],
})
export class ProjectsEditComponent {
  proyectos?: Proyectos;
  data: any;

  constructor(
    private proyectosService: ProyectosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.proyectosService.verProyecto(id).subscribe((data) => {
      this.proyectos = data;
    });
  }

  proyectosForm = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
  });

  get Imagen() {
    return this.proyectosForm.get('imagen');
  }

  get Titulo() {
    return this.proyectosForm.get('titulo');
  }

  get Descripcion() {
    return this.proyectosForm.get('descripcion');
  }

  get Link() {
    return this.proyectosForm.get('link');
  }

  clear(): void {
    this.proyectosForm.reset();
  }

  updateProyecto(): void {
    this.data = this.proyectosForm.value;
    this.proyectosService
      .modificarProyecto(this.proyectos?.id, this.data)
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.proyectosForm.valid) {
      this.updateProyecto();
      window.location.reload();
      alert('Proyecto modificado.');
    } else {
      this.proyectosForm.markAllAsTouched();
    }
  }
  index() {
    this.router.navigate(['home']);
  }
}
