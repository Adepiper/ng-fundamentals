import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

 @Input() event : IEvent
  getStartTimeClass(): any{
  if (this.event && this.event.time === '8:00 am')
    return {color: '#003300', 'font-weight': 'bold'}
    else{
      return {}
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
