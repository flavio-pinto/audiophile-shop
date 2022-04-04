import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss']
})
export class ToggleMenuComponent implements OnInit {
  showMenu: boolean = false;
  menuItems = [
    {
      path: "../../../assets/shared/desktop/image-category-thumbnail-headphones.png",
      name: "headphones"
    },
    {
      path: "../../../assets/shared/desktop/image-category-thumbnail-speakers.png",
      name: "speakers"
    },
    {
      path: "../../../assets/shared/desktop/image-category-thumbnail-earphones.png",
      name: "earphones"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
