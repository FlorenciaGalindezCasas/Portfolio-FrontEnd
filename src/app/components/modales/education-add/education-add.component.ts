import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css'],
})
export class EducationAddComponent {
  data: any;

  constructor(
    private educacionService: EducacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  educacionAddForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    institucion: new FormControl('', [Validators.required]),
    inicio: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
  });

  get Titulo() {
    return this.educacionAddForm.get('titulo');
  }

  get Institucion() {
    return this.educacionAddForm.get('institucion');
  }

  get Inicio() {
    return this.educacionAddForm.get('inicio');
  }

  get Estado() {
    return this.educacionAddForm.get('estado');
  }

  get Logo() {
    return this.educacionAddForm.get('logo');
  }

  clear(): void {
    this.educacionAddForm.reset();
  }

  createEducacion(): void {
    this.data = this.educacionAddForm.value;
    this.educacionService.crearEducacion(this.data).subscribe((data) => {
});
    alert('Educacion añadida');
  }

  onSubmit() {

    if (this.educacionAddForm.valid) {
      this.createEducacion(); 
      window.location.reload();     
      
    } else {
      // this.educacionAddForm.markAllAsTouched();
      this.createEducacion(); 
      window.location.reload();      
    }
  }
  
  // index() {
  //   this.router.navigate(['home']);
  // }
}
