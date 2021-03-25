import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 pudim="sobremesa"
 cor="azul"

 sozinho="Sejam Bem Vindos"

  constructor(){
    setTimeout(()=> {
      this.sozinho="Novo Título dps de 3s";
    },3000)
  }

  eventoRecebido($event){
    console.log('AppComponent: Evento recebido', $event)
  }

  

  
  

}
