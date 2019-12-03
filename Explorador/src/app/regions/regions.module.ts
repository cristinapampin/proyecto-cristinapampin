import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { RegionsListComponent } from './regions/regions-list/regions-list.component';


@NgModule({
  declarations: [RegionsComponent, RegionsListComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegionsModule { }
