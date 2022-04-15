import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  showcaseProducts!: Product[];

  constructor(private prodSrv: ProductsService) { }

  ngOnInit(): void {
    this.prodSrv.getShowCaseProducts().subscribe(res => {
      this.showcaseProducts = res;
      console.log(this.showcaseProducts);
    })
  }
}
