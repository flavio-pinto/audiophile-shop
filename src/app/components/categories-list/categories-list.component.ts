import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categoryItems = [
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
