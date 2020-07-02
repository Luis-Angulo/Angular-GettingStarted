import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductsDetailGuard } from './products/products-detail.guard';

@NgModule({
  // elements of this module that are exported
  declarations: [
    AppComponent,
    ProductsListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
  ],
  // modules that stuff in this module requires
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id',
       component: ProductDetailComponent,
       canActivate: [ProductsDetailGuard]
       },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]), // routes for the root, html5 style
  ],
  // startup module for this module
  bootstrap: [AppComponent],
})
export class AppModule {}
