import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', component: ErrorPersonalizadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
