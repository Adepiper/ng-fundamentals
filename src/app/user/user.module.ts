import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { userRoutes } from './user.route';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ]
})
export class UserModule {

 }
