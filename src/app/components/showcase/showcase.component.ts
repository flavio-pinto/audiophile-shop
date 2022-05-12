import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShowcaseProduct } from 'src/app/models/showcaseProduct';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  @Input() showcaseProductsInfo!: ShowcaseProduct[];

  constructor() { }

  ngOnInit(): void {
    console.log('ciao', this.showcaseProductsInfo);
  }

}
