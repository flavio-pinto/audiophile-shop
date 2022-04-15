import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getShowCaseProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json').pipe(map(el => el.filter(el => el.showcase === true)))
  }
}
