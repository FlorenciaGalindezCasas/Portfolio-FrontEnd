import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css'],
})
export class ProjectsAddComponent {
  data: any;

  constructor(
    private proyectosService: ProyectosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  proyectosAddForm = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
  });

  get Imagen() {
    return this.proyectosAddForm.get('imagen');
  }

  get Titulo() {
    return this.proyectosAddForm.get('titulo');
  }

  get Descripcion() {
    return this.proyectosAddForm.get('descripcion');
  }

  get Link() {
    return this.proyectosAddForm.get('link');
  }

  clear(): void {
    this.proyectosAddForm.reset();
  }

  createProyecto(): void {
    this.data = this.proyectosAddForm.value;
    this.proyectosService.crearProyecto(this.data).subscribe((data) => {
      console.log(data);
    });

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.proyectosAddForm.valid) {
      this.createProyecto();
      window.location.reload();
      alert('Proyecto añadido.');
    } else {
      this.proyectosAddForm.markAllAsTouched();
    }
  }
  index() {
    this.router.navigate(['home']);
  }
}
