import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserKey = "currentUser";

  constructor(private router: Router, private auth: Auth) { }

  setUser(user: any) {
    localStorage.setItem(this.currentUserKey, JSON.stringify(user));
  }

  getUser() {
    const userJson = localStorage.getItem(this.currentUserKey);
    if(userJson){
      return JSON.parse(userJson);
    }
    return null;
  }

  register({email, password}: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  forgotPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email).then(() => {
      this.router.navigate(['/recover/password/confirmation', "valid"]);
    }).catch((error) => { 
      return error.message;
    });
  }

  logout() {
    //localStorage.removeItem(this.currentUserKey);
    return signOut(this.auth);
  }
}
