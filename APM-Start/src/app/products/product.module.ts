import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [
    // forChild prevents re-registering of the routing service in the app module
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductsDetailGuard],
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
