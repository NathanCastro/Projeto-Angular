import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicios-diretivas';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent {

  /*listaFrutas = [
    'Maçã',
    'Laranja',
    'banana',
    'Melão'
  ];

  carrosLista = [{
    placa:'KLS-5412',
    cor: 'Vermelho'
  },{
    placa:'WXA-9631',
    cor: 'Violeta'
  },{
    placa:'MNB-7418',
    cor: 'Azul'
  }];



  deveExibir = true;

  trocarValor(){
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1, numero2){
    return numero1 + numero2;
  }*/

  PREFIXO_URL='https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images'
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
  
  
  
  
}
