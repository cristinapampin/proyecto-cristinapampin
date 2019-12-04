import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'abanca-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  region$: Observable<any>;
  countries$: Observable<any[]>;

  constructor(public activatedRoute: ActivatedRoute, public api: ApiService) { }

  ngOnInit() {
    const regionCode = this.activatedRoute.snapshot.params.regionCode;
    console.log(regionCode);
    this.countries$ = this.api.getCountriesByRegion$(regionCode);
    this.region$ = this.api.getRegionByCode$(regionCode);
  }

}
