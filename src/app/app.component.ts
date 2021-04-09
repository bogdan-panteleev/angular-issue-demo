import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lasttest';

  myObservable = new Observable<number>((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
  }).pipe(map((x) => x * 10));
}
