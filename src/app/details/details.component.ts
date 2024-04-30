import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <article class="flex lg:flex-row-reverse flex-col justify-between w-full p-2">
    <img class="listing-photo lg:h-[30rem] lg:w-[60%] w-full h-fit rounded-md" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading text-3xl font-bold">{{housingLocation?.name}}</h2>
      <div class="listing-location font-bold flex items-center">
      <img src="/assets/location.svg" alt="Location icon" class="h-4 w-4 inline-block " aria-hidden="true">
        <p>{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </div>
      <h2 class="section-heading text-blue-600 font-bold mt-4">About this housing location</h2>
      <ul class="text text-sm">
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
      </ul>
    </section>
  </article>
`,
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

}
