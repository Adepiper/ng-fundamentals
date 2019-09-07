import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { pipe, from } from 'rxjs';
import { EventServiceComponent} from '../event-service/event-service.component'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {
  resolve(){
    return this.eventService.getEvents().pipe(map(events=>events))
  }

  constructor( private eventService:EventServiceComponent) { }
}
