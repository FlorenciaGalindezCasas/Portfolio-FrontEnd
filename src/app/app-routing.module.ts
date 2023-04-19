import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'persona/modificar/:id', component: HomeComponent },
  { path: 'educacion/agregar', component: HomeComponent },
  { path: 'educacion/modificar/:id', component: HomeComponent },
  { path: 'estudios', component: EducationComponent },
  { path: 'proyectos/agregar', component: HomeComponent },
  { path: 'proyectos/modificar/:id', component: HomeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'habilidades/agregar', component: HomeComponent },
  { path: 'habilidades/modificar/:id', component: HomeComponent },
  { path: 'habilidades', component: SkillsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
