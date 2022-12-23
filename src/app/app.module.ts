import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FormacionComponent } from './formacion/formacion.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HelloComponent } from './hello/hello.component';
import { RedesDashboardComponent } from './dashboard/redes/redes.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsDashboardComponent } from './dashboard/skills/skills.component';
import { BannerDashboardComponent } from './dashboard/banner/banner.component';
import { ExperienciaDashboardComponent } from './dashboard/experiencia/experiencia.component';
import { PresentacionDashboardComponent } from './dashboard/presentacion/presentacion.component';
import { ProyectosDashboardComponent } from './dashboard/proyectos/proyectos.component';
import { FormacionDashboardComponent } from './dashboard/formacion/formacion.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    ErrorPersonalizadoComponent,
    DashboardComponent,
    RegistroComponent,
    PresentacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    FormacionComponent,
    FooterComponent,
    ProyectosComponent,
    HelloComponent,
    RedesDashboardComponent,
    SkillsDashboardComponent,
    BannerDashboardComponent,
    ExperienciaDashboardComponent,
    PresentacionDashboardComponent,
    ProyectosDashboardComponent,
    FormacionDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
