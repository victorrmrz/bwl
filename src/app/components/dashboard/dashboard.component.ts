import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  offset: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {

  }

  setOffset(offset) {

  }


}
