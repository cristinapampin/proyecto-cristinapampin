import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries/countries.service';

@Component({
  selector: 'abanca-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: any[] = [];
  selectedCountry: any;

  constructor(public countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(data => {
      this.countries = data;
      console.log(this.countries);
    });
  }
  toSelectCountry(country:any){
    this.selectedCountry = country;
  }

}
