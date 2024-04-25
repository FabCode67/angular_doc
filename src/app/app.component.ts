import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  template:`<main class="p-2 flex flex-col space-y-1">
        <a [routerLink]="['/']">

  <header class="brand-name  px-2">
    <img class="brand-logo" src="/assets/logo.svg" class='h-6 mt-1' alt="logo" aria-hidden="true">
  </header>
</a>
  <section class="content">
  <router-outlet></router-outlet>
  </section>
</main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Home';
}
