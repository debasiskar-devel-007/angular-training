import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-another-component',
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css']
})
export class AnotherComponentComponent {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }


}
