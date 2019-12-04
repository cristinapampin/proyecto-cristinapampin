import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { RegionCardComponent } from '../region-card/region-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [RegionComponent, RegionCardComponent],
  imports: [
    CommonModule,
    RegionRoutingModule, SharedModule, MatCardModule
  ]
})
export class RegionModule { }
