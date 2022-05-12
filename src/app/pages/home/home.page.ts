import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShowcaseProduct } from 'src/app/models/showcaseProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  showcaseProducts!: Product[];
  showcaseProductsInfo!: ShowcaseProduct[];

  constructor(private prodSrv: ProductsService) { }

  ngOnInit() {
    this.prodSrv.getShowCaseProducts().subscribe(res => {
      this.showcaseProducts = res;

      this.showcaseProductsInfo = this.showcaseProducts.map((prod: Product) => {
        return {
          showcaseName: prod.showcaseName,
          url: `/products/${prod.category}/${prod.slug}`,
          image: prod.image.desktop,
          showcaseDescription: prod.showcaseDescription
        }
      })
    })
  }
}
