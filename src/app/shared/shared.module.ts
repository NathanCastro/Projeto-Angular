import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { ContadorComponent } from './components/contador/contador.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { ExercicioNgclassComponent } from './components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './components/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DataBindingComponent,
    ContadorComponent,
    DiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DataBindingComponent,
    ContadorComponent,
    DiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
  ],
})
export class SharedModule { }





