import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'
import { ISession } from '../event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterServiceService {
   deleteVoter(eventId: number, session: ISession, voterName: string){
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
      this.http.delete(url).pipe(catchError(this.handleError('deleteVoter'))).subscribe()
   }

   addVoter(eventId:number, session: ISession, voterName: string){
     session.voters.push(voterName)

     const options = {headers: new HttpHeaders({'Content-Type': '/application/json'})}
     const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
     this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).subscribe()
   }

   userHasVoted(session: ISession, voterName: string){
     return session.voters.some(voter => voter === voterName)

   }

   private handleError<T> (operation ='operation', result?: T){
    return(error: any): Observable<T> => {
      console.log(error)
      return of (result as T)
    }
  }
  constructor(private http: HttpClient) { }
}
