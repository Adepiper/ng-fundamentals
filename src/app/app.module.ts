import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './events/nav-bar/nav-bar.component';
import { EventServiceComponent } from './events/event-service/event-service.component';

import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorsComponent } from './errors/errors/errors.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/event-list/event-list-resolver.service';
import { IEvent} from './events/event.model'
import { AuthServiceService } from './user/auth-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/session-list/session-list.component';
import { CollapsibleWellComponent } from './events/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/duration.pipe';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { JQ_TOKEN } from './common/jquery.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/upvote/upvote.component';
import { VoterServiceService } from './events/session-list/voter-service.service';
import { LocationValidatorDirective } from './events/event-details/location-validator.directive';
 let toastr: Toastr = window['toastr']
 let jQuery = window['$']




@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorsComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,


  ],
  providers: [EventServiceComponent,
    EventRouteActivatorService,
    EventListResolverService,
    AuthServiceService,
    VoterServiceService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},

  {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent){
 if (component.isDirty)
 return window.confirm('You have not saved this event, do you really want to cancel?')
 return true
}
