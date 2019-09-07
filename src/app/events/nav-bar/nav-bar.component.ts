import { Component, OnInit,  } from '@angular/core';
import { AuthServiceService } from 'src/app/user/auth-service.service';
import { ISession } from '../event.model';
import { EventServiceComponent } from '../event-service/event-service.component';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
searchTerm: string = '';
foundSessions: ISession[]
  constructor(public auth:AuthServiceService, private eventService:EventServiceComponent) { }


  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions

    })
  }

}
