import { Component } from '@angular/core';
import { AuthServiceService } from './user/auth-service.service';

@Component({
  selector: 'events-app',
  template: `
  <app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  constructor(private auth: AuthServiceService){
  }
  ngOnInit (){
    this.auth.checkAuthenticationStatus();
  }
}
