import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abanca-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.css']
})
export class RegionCardComponent implements OnInit {
  @Input() region: any;
  constructor() { }

  ngOnInit() {
    console.log(this.region);
  }

}
