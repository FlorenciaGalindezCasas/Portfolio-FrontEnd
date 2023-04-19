import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  logueado = false;
  skills: Skills[] | undefined;

  constructor(
    private skillsService: SkillsService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.verSkills();
    if (this.tokenService.getToken()) {
      this.logueado = true;
    } else {
      this.logueado = false;
    }
  }

  verSkills(): void {
    this.skillsService.verSkills().subscribe((dato) => {
      this.skills = dato;
    });
  }

  crearSkill() {
    this.router.navigate(['habilidades/agregar']);
  }

  modificarSkill(id: number) {
    this.router.navigate(['habilidades/modificar/', id]);
  }

  eliminarSkill(id: number) {
    this.skillsService.eliminarSkill(id).subscribe((data) => {
      this.skills = this.skills?.filter((skills) => skills.id !== id);
    });
    setTimeout(() => {
      window.location.reload();
    }, 0);
  }
}
