import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'abanca-form-filters',
  templateUrl: './form-filters.component.html',
  styleUrls: ['./form-filters.component.css']
})
export class FormFiltersComponent implements OnInit {
  formFilters = this.formBuilder.group ({
    selectedIncomeLevel: [],
    selectedLendingType: [],
    selectedRegionFilter: [],
  });

  @Input() incomeLevels: any[];
  @Input() lendingTypes: any[];
  @Input() regionsFilter: any[];

  @Output() applyFilterEvent = new EventEmitter();


  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  applyFilters(){
    console.log(this.formFilters.value);
    this.applyFilterEvent.emit(this.formFilters.value);
  }

}
