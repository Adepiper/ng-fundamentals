import { Component, OnInit } from '@angular/core';
import { EventServiceComponent } from '../event-service/event-service.component';

import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../event.model';
declare let toastr;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: IEvent;
  constructor(private eventService: EventServiceComponent,  private route: ActivatedRoute) {

  }

  ngOnInit() {
    return this.events = this.route.snapshot.data.events;
  }


}
