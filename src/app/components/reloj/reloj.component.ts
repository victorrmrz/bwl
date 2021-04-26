import { Component, Input, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent implements OnInit {

  time = new Date();
  rxTime = new Date();
  subscription: Subscription;
  @Input() offset: number;

  constructor() { }

  ngOnInit(): void {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => this.getTimeByUTCOffset(this.offset != null ? this.offset : -5)),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getTimeByUTCOffset(offset) {
    var UTC = (new Date().getTimezoneOffset()) / 60;
    var hours = UTC + offset;
    var d = new Date().setHours(new Date().getHours() + hours );
    return new Date(d);
  }

}
