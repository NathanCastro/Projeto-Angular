import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './teste/teste.component';


const routes: Routes = [{
  path:'',
  component:HomeComponent,
},{
  path:'login',
  component: LoginComponent,
},{
  path: 'teste',
  component: TesteComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
