import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss']
})
export class ToggleMenuComponent implements OnInit {
  showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
