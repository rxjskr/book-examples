import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: '<h1>interval: {{x}}</h1>',
})
export class AppComponent implements OnInit, OnDestroy {
  x = 0;
  subscription = null;
  source$ = interval(1000);

  ngOnInit() {
    this.subscription = this.source$.subscribe(x => {
        this.x = x;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
