import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';

@Component({
  // No selector is needed, since this component will not be nested
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
