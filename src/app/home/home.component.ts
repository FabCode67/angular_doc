import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
  <section class="p-2">
    <form class=" flex space-x-2">
      <input class="w-[30%] px-3 py-2 border border-blue-500 rounded-md " type="text" placeholder="Filter by city">
      <button class="primary" type="button" class="bg-blue-600 text-white font-bold px-3 py-1 rounded-md">Search</button>
    </form>
  </section>
  <section class="results">
  <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
  </section>

  `,
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
