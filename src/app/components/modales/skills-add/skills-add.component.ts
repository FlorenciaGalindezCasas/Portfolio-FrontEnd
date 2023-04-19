import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css'],
})
export class SkillsAddComponent {
  data: any;

  constructor(
    private skillsService: SkillsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  skillsAddForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    icono: new FormControl('', [Validators.required]),
    porcentaje: new FormControl('', [Validators.required]),
  });

  get Titulo() {
    return this.skillsAddForm.get('titulo');
  }

  get Icono() {
    return this.skillsAddForm.get('icono');
  }

  get Porcentaje() {
    return this.skillsAddForm.get('porcentaje');
  }

  clear(): void {
    this.skillsAddForm.reset();
  }

  createSkill(): void {
    this.data = this.skillsAddForm.value;
    this.skillsService.crearSkill(this.data).subscribe((data) => {
      console.log(data);
    });

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.skillsAddForm.valid) {
      this.createSkill();
      window.location.reload();
      alert('Skill añadida.');
    } else {
      this.skillsAddForm.markAllAsTouched();
    }
  }
  index() {
    this.router.navigate(['home']);
  }
}
