import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent  {
  
  @Input() valorDoNumero = 0;
  @Output() valorMudou = new EventEmitter();
 
  clickSomar($event){
   this.valorDoNumero = this.valorDoNumero + 1;
   this.valorMudou.emit(this.valorDoNumero);
    
  }

  clicksubtrair($event){
    this.valorDoNumero = this.valorDoNumero - 1;
    this.valorMudou.emit(this.valorDoNumero);
  }



}
