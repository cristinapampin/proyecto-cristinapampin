import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abanca-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {
   regions: any[];

  constructor() { }

  ngOnInit() {
  }

}
