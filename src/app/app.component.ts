import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template:`<main>
  <header class="brand-name  px-2">
    <img class="brand-logo" src="/assets/logo.svg" class='h-6 mt-1' alt="logo" aria-hidden="true">
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Home';
}
