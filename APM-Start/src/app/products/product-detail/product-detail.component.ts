import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // No selector is needed, since this component will not be nested
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    // + casts id to number
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.pageTitle += `: ${id}`;
    // HC product
    this.product = {
      productId: id,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    };
  };

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
