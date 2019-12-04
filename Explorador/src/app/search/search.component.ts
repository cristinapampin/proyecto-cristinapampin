import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  incomeLevels$: Observable<any[]>;
  lendingType$: Observable<any[]>;
  regionsFilter$: Observable<any[]>;
  countriesFiltered$: Observable<any[]>;

  constructor(public api: ApiService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.incomeLevels$ = this.api.getIncomeLevels$();
    this.lendingType$ = this.api.getLendingTypes$();
    this.regionsFilter$ = this.api.getAllRegions$();
  }
  filterResults(filter: any){
    console.log(filter);
    this.countriesFiltered$ = this.api.getCountriesByFilters(filter);
  }


}
