import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email= "marina@gmail.com";
  password="123456";

  constructor( 
    public auth: AngularFireAuth,
    public router:Router
    ) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.signOut();
    console.log(this.auth.signOut());
  }
  customLogin(){
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(res => {
      console.log(res);
      this.router.navigate(['home'])   
    })
    .catch(err => console.log(err))
  }
}
