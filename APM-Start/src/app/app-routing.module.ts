// Base angular modules (required)
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routed components
import { WelcomeComponent } from './home/welcome.component';

// Module config decorator
@NgModule({
  imports: [
      // AppRouting is the base router, so it uses forRoot
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
