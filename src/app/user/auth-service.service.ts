import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { first, last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  currentUser: IUser
  loginUser(userName: string, password: string){
    this.currentUser = {
    id: 1,
    userName: userName,
    firstName: 'John',
    lastName: 'papa'
    }
  }

  isAuthenticated(){
    return!!this.currentUser
  }
  updateCurrentUser (firstName:string, lastName:string){
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
  constructor() { }
}
