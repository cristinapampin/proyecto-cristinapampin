import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  urlApi = 'https://api.worldbank.org/v2/country?per_page=1000&format=json';
  constructor(public httpClient: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlApi).pipe(map(data => (data ? data[1] : [])))
  }
}
