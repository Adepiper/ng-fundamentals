import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  firstName?: FormControl
  lastName?: FormControl

  constructor(private authService:AuthServiceService, private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {

    this.profileForm = new FormGroup({
      firstName:  new FormControl(this.authService.currentUser.firstName, Validators.required),
      lastName: new FormControl(this.authService.currentUser.lastName, Validators.required)
    })
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events'])
    this.toastr.success('Profile Saved')
  }
}
validateFirstName(){
 return this.firstName.valid || this.firstName.touched
}
validateLastName(){
  return this.lastName.valid || this.lastName.touched
 }

  cancel() {
    this.router.navigate(['events'])
  }

}
