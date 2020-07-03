import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // forChild prevents re-registering of the routing service in the app module
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id',
       component: ProductDetailComponent,
       canActivate: [ProductsDetailGuard]
       },
    ])
  ]
})
export class ProductModule { }
