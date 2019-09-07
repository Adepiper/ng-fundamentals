import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService:AuthServiceService, private router:Router) { }
  userName
  password
  mouseoverLogin
  login(formValues){
   this.authService.loginUser(formValues.userName, formValues.password)
   this.router.navigate(['events'])
  }

  cancel(){
    this.router.navigate(['events'])
  }

  ngOnInit() {
  }

}
