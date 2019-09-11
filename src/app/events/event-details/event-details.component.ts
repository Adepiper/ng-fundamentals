
import { Component, OnInit } from '@angular/core';
import { EventServiceComponent } from '../event-service/event-service.component';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
event: any;
addMode: boolean;
filterBy = 'all';
sortBy = 'votes';
  constructor(private eventService: EventServiceComponent, private Route: ActivatedRoute) { }

  ngOnInit() {
    this.Route.data.forEach((data) => {

       this.event = data.event;
       this.addMode = false;
     });
}
  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }
  cancelAddSession() {
    this.addMode = false;
  }
}
