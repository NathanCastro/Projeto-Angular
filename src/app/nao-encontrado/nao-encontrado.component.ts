import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nao-encontrado',
  templateUrl: './nao-encontrado.component.html',
  styleUrls: ['./nao-encontrado.component.scss']
})
export class NaoEncontradoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageURL="http://www.famevaco.br/ebook/public/img/404_icon.gif"

}
