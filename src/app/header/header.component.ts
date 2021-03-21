import { Component, OnInit } from '@angular/core';

@Component({//decorator
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title= "Sejam bem vindos"
  constructor() { }

  ngOnInit(): void {
  }

}
