import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  // elements of this module that are exported
  declarations: [AppComponent, WelcomeComponent],
  // modules that stuff in this module requires
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule, // routes for the root, html5 style
    AppRoutingModule
  ],
  // startup module for this module
  bootstrap: [AppComponent],
})
export class AppModule {}
