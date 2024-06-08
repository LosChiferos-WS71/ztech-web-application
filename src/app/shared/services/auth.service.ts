import { Injectable } from '@angular/core';
import { Auth, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private auth: Auth) { }

  forgotPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email).then(() => {
      this.router.navigate(['/recover/password/confirmation', "valid"]);
    }).catch((error) => { 
      return error.message;
    });
  }

  logout() {
    return signOut(this.auth);
  }
}
