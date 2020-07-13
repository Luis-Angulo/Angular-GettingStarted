// Base angular modules (required)
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routed components
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailGuard } from './guards/products-detail.guard';

// Module config decorator
@NgModule({
  imports: [
    // ProductRouting is a child of the main app, so
    // it uses forChild. Otherwise it would overwrite
    // the parents routes configs
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductsDetailGuard],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
