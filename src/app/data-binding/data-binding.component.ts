import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  @Input() palavra: string;
  @Input() color: string;

  @Output() clicado = new EventEmitter();

  
  imageURL="https://i.ytimg.com/vi/X6e7Yv9_Z4w/maxresdefault.jpg"
  initialValue="valor inicial"
  isDisabled= true;
  accessibilityText = 'um texto acessecível';
  
  valorDoInput=""
  
  constructor() {
    setTimeout(()=> {
      this.isDisabled= false;
      console.log('depois de 3s fica habilitado', this.isDisabled);


    },3000)
   }

  ngOnInit(): void {
  }

  onClick($event){
    console.log('clicouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', $event)
  }

  DigitouAlgo($event){
    this.valorDoInput = $event.target.value
    console.log($event)
  }

  passouMouse(){
    console.log('alguém passou o mouse em mim')
  }

  onClickBotaoEmissor($event){
    console.log('devo emitir informações')
    this.clicado.emit($event);
  }

  valorInicial= 10;
  valorAtualizado(novoValor){
    console.log('valorAtualizado: ', novoValor)
  }

}
