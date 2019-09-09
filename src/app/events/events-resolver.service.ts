import { Injectable } from '@angular/core';
import { EventServiceComponent } from './event-service/event-service.component';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsResolverService {

  constructor(private eventService :EventServiceComponent) { }

  resolve(route: ActivatedRouteSnapshot){
    return this.eventService.getEvent(route.params['id'])
  }
}
