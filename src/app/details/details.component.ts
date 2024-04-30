import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      <h2 class="section-heading mt-8">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()" class="flex flex-col space-y-2">
        <label for="first-name">First Name</label>
        <input class="border border-blue-500 p-2 outline-1 outline-blue-600 rounded-md" id="first-name" type="text" formControlName="firstName">
        <!-- <input id="first-name" type="text" formControlName="firstName"> -->

        <label for="last-name">Last Name</label>
        <input class="border border-blue-500 p-2 outline-1 outline-blue-600 rounded-md" id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input class="border border-blue-500 p-2 outline-1 outline-blue-600 rounded-md" id="email" type="email" formControlName="email">
        <button type="submit" class="primary" class="
        bg-blue-600 text-white font-bold px-3 py-1 rounded-md
        ">Apply now</button>
      </form>
    </section>
  </article>
`,
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    this.applyForm.reset();

  }
}
