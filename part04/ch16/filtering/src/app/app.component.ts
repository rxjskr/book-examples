import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, combineLatest } from 'rxjs';
import { startWith, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <input type="text" [formControl]="name">
  <ul>
    <li *ngFor="let user of filtered$ | async">
      {{user}}
    </li>
  </ul>
  `
})
export class AppComponent implements OnInit {
  name = new FormControl();
  list$ = of(['john', 'aiden', 'bob', 'paul', 'sam']);
  filtered$ = null;

  ngOnInit() {
    const name$ = this.name.valueChanges
      .pipe(startWith(''))
      .pipe(distinctUntilChanged());

    this.filtered$ = combineLatest(this.list$, name$, (list, name) => {
        return list.filter(item => item.includes(name));
      });
  }
}
