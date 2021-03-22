import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  @Input() palavra: string;
  @Input() color: string;

  
  imageURL="https://i.ytimg.com/vi/X6e7Yv9_Z4w/maxresdefault.jpg"
  initialValue="valor inicial"
  isDisabled= true;
  accessibilityText = 'um texto acessecível';
  
  
  constructor() {
    setTimeout(()=> {
      this.isDisabled= false;
      console.log('depois de 3s fica habilitado', this.isDisabled);


    },3000)
   }

  ngOnInit(): void {
  }

}
