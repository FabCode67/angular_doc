import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <section class="listing bg-slate-300 w-full p-2 rounded-md">
    <img class="listing-photo h-44 w-full" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading text-xl font-semibold mt-2 text-indigo-700">{{ housingLocation.name }}</h2>
    <i class="fa-regular fa-location-dot"></i>
    <p class="listing-location">
      <img src="/assets/location.svg" alt="Location icon" class="h-4 w-4 inline-block " aria-hidden="true">
      {{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>

  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
