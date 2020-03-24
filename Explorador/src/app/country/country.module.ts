import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CountryComponent, CountryCardComponent, CountryDetailsComponent],
  imports: [CommonModule, CountryRoutingModule, MatCardModule, MatButtonModule]
})
export class CountryModule {}
