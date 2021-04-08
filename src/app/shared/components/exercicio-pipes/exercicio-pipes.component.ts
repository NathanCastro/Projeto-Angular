import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss'],
  providers:[
    DecimalPipe,
  ]
})
export class ExercicioPipesComponent {

  constructor(
    private decimalPipe: DecimalPipe
  ){}

  /*filmes = {
    titulo: 'A Origem',
    estrela: 4.7657452145,
    precoAluguel: 76.32,
    dataLancamento: new Date(2000, 11, 20)
  }*/

  compras= [{
    produto: 'lâmpadas',
    valor: 299.98,
    quantidade: 2,
    peso: 0,
    data: new Date(2021, 2, 3, 15,23),
  },{
    produto: 'farofa',
    valor: 852.98,
    quantidade: 2,
    peso: 29.654,
    data: new Date(2021, 6, 2, 22,10),
  }];

  getPesoFormatado(peso: number){
    if(peso <= 0){
      return 'sem peso'
    }
    return this.decimalPipe.transform(peso, '1.1-2') + 'Kg';
  }


}
