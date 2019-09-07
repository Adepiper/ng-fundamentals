import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
