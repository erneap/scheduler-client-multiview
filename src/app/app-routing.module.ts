import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './header/login/login.component';

const desktop_routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home'}
];

const mobile_routes: Routes = [];

const tablet_routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
