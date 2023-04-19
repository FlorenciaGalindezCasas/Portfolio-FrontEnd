import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css'],
})
export class SkillsEditComponent {
  skills?: Skills;
  data: any;

  constructor(
    private skillsService: SkillsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.skillsService.verSkill(id).subscribe((data) => {
      this.skills = data;
    });
  }

  skillsForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    icono: new FormControl('', [Validators.required]),
    porcentaje: new FormControl('', [Validators.required]),
  });

  get Titulo() {
    return this.skillsForm.get('titulo');
  }

  get Icono() {
    return this.skillsForm.get('icono');
  }

  get Porcentaje() {
    return this.skillsForm.get('porcentaje');
  }

  clear(): void {
    this.skillsForm.reset();
  }

  updateSkill(): void {
    this.data = this.skillsForm.value;
    this.skillsService
      .modificarSkill(this.skills?.id, this.data)
      .subscribe((data) => {
        console.log(data);
      });

    this.router.navigate(['/']);
  }

  onSubmit(event: Event) {
    event.preventDefault;

    if (this.skillsForm.valid) {
      this.updateSkill();
      window.location.reload();
      alert('Skill modificada.');
    } else {
      this.skillsForm.markAllAsTouched();
    }
  }
  index() {
    this.router.navigate(['home']);
  }
}
