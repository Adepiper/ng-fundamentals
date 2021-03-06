import {Routes} from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { ErrorsComponent } from './errors/errors/errors.component';

import { EventListResolverService } from './events/event-list/event-list-resolver.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { EventsResolverService } from './events/events-resolver.service';





export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
{path: 'events', component: EventListComponent, resolve: {events: EventListResolverService}},
{path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventsResolverService}},
{path: 'events/session/new', component: CreateSessionComponent},
{path: '404', component: ErrorsComponent},
{path: '', redirectTo: '/events', pathMatch: 'full'},
{path: 'user', loadChildren: './user/user.module#UserModule'}

];
