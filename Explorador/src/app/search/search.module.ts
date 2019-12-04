import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MatSelectModule } from '@angular/material/select';
import { FormFiltersComponent } from './form-filters/form-filters.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchComponent, FormFiltersComponent],
  imports: [
    CommonModule,
    SearchRoutingModule, MatSelectModule, FormsModule, ReactiveFormsModule, SharedModule
  ],
  providers: [FormBuilder]
})
export class SearchModule { }
