import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ModalComponent } from './components/modal/modal.component';
import { EducationEditComponent } from './components/modales/education-edit/education-edit.component';
import { HeaderEditComponent } from './components/modales/header-edit/header-edit.component';
import { NavEditComponent } from './components/modales/nav-edit/nav-edit.component';
import { ProjectsEditComponent } from './components/modales/projects-edit/projects-edit.component';
import { EducationAddComponent } from './components/modales/education-add/education-add.component';
import { ProjectsAddComponent } from './components/modales/projects-add/projects-add.component';
import { SkillsAddComponent } from './components/modales/skills-add/skills-add.component';
import { SkillsEditComponent } from './components/modales/skills-edit/skills-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptorProvider } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ModalComponent,
    EducationEditComponent,
    HeaderEditComponent,
    NavEditComponent,
    ProjectsEditComponent,
    EducationAddComponent,
    ProjectsAddComponent,
    SkillsAddComponent,
    SkillsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
