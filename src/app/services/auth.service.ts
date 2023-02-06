import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', "");
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  signIn(email:any, password:any) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(email:any, password:any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
