import { Component, Input, OnInit } from '@angular/core';

@Component({//decorator
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  
  @Input() title:string;
  

  isDisabled = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
