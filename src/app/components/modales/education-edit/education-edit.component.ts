import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css'],
})
export class EducationEditComponent {
  educacion?: Educacion;
  data: any;

  constructor(
    private educacionService: EducacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.educacionService.verEducacion(id).subscribe((data) => {
      this.educacion = data;
    });
  }

  educacionForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    institucion: new FormControl('', [Validators.required]),
    inicio: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
  });

  get Titulo() {
    return this.educacionForm.get('titulo');
  }

  get Institucion() {
    return this.educacionForm.get('institucion');
  }

  get Inicio() {
    return this.educacionForm.get('inicio');
  }

  get Estado() {
    return this.educacionForm.get('estado');
  }

  get Logo() {
    return this.educacionForm.get('logo');
  }

  clear(): void {
    this.educacionForm.reset();
  }

  updateEducacion(): void {
    this.data = this.educacionForm.value;
    this.educacionService
      .modificarEducacion(this.educacion?.id, this.data)
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.educacionForm.valid) {
      this.updateEducacion();
      window.location.reload();
      alert('Educacion modificada.');
    } else {
      this.educacionForm.markAllAsTouched();
    }
  }
  index() {
    this.router.navigate(['home']);
  }
}
