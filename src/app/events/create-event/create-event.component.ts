import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceComponent } from '../event-service/event-service.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent
  isDirty:boolean = true
  constructor(private router:Router, private eventService: EventServiceComponent) { }
  saveEvent(formValues){
    this.eventService.saveEvent(formValues).subscribe(()=>{
      this.isDirty = false
      this.router.navigate(['/events'])
    })

  }

  cancel(){
    this.router.navigate(['/events'])
  }
  ngOnInit() {
  }

}
