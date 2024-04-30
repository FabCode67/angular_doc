import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
  <section class="flex flex-col space-y-2">
    <form class=" flex space-x-2 mb-3">
      <input class="w-[30%] px-3 py-2 border border-blue-500 rounded-md " type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" class="bg-blue-600 text-white font-bold px-3 py-1 rounded-md" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results grid gap-8 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
  <app-housing-location class="w-full"
  *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation">
</app-housing-location>
  </section>

  `,
})

export class HomeComponent {
  
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}