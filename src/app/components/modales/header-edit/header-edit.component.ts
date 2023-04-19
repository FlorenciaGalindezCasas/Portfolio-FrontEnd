import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header-edit',
  templateUrl: './header-edit.component.html',
  styleUrls: ['./header-edit.component.css'],
})
export class HeaderEditComponent {
  persona?: Persona;
  data: any;

  constructor(
    private personaService: PersonaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.personaService.verPersona(id).subscribe((data) => {
      this.persona = data;
    });
  }

  skillForm = new FormGroup({
    nombreCompleto: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    banner: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
  });
  get NombreCompleto() {
    return this.skillForm.get('nombreCompleto');
  }
  get Titulo() {
    return this.skillForm.get('titulo');
  }
  get Banner() {
    return this.skillForm.get('banner');
  }
  get Img() {
    return this.skillForm.get('img');
  }
  get Descripcion() {
    return this.skillForm.get('descripcion');
  }
  clear(): void {
    this.skillForm.reset();
  }

  updatePersona(): void {
    this.data = this.skillForm.value;
    this.personaService
      .modificarPersona(this.persona?.id, this.data)
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.skillForm.valid) {
      this.updatePersona();
      window.location.reload();
      alert('Perfil modificado.');
    } else {
      this.skillForm.markAllAsTouched();
    }
  }
  index() {
    this.router.navigate(['index']);
  }
}
