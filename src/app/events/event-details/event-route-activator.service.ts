import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventServiceComponent } from '../event-service/event-service.component';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService:EventServiceComponent, private router:Router) {

   }
   canActivate(route:ActivatedRouteSnapshot){
  const eventExists =  !!this.eventService.getEvent(+route.params['id'])

   if (!eventExists)
     this.router.navigate(['/404'])
  return eventExists

}
}
