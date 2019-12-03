import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionComponent } from './region/region.component';
import { RegionCardComponent } from './region/region-card/region-card.component';


@NgModule({
  declarations: [RegionsComponent, RegionComponent, RegionCardComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA], exports: [RegionComponent, RegionCardComponent]
})
export class RegionsModule { }
