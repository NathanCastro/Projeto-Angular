import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {

  filmes = {
    titulo: 'A Origem',
    estrela: 4.7657452145,
    precoAluguel: 76.32,
    dataLancamento: new Date(2000, 11, 20)
  }

}
