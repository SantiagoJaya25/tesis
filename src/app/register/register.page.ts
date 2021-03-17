import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {emailVerified} from '@angular/fire/auth-guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  async onRegister(email, password){
  try{
    const user = await  this.authService.register(email.value, password.value );
    if (user){
      console.log( 'User -->', user);
    }
  }
  catch (error) {
    console.log('Error', error);
  }

  }
}
