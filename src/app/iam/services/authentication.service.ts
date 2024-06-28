import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, retry, throwError} from "rxjs";
import {Router} from "@angular/router";
import { SignUpRequest } from '../model/sign-up.request';
import { SignUpResponse } from '../model/sign-up.response';
import { SignInRequest } from "../model/sign-in.request";
import { SignInResponse } from '../model/sign-in.response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  basePath: string = `${environment.api}`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
  })};

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient) { }


  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.log(
        `An error occurred ${error.status}, body was: ${error.error.message}`
      );
    } else {
      console.log(
        `Backend returned code ${error.status}, body was: ${error.error.message}`
      );
    }
    return throwError(() => ({ status: error.status, message: error.error.message }))
  }

  /**
   * Sign up a new user
   * @param signUpRequest - The sign-up request containing the username and password
   * @returns - The sign-up response containing the user id and username
   */
  signUp(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(`${this.basePath}authentication/sign-up`, signUpRequest, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * Sign in an existing user
   * @param signInRequest - The sign-in request containing the username and password
   * @returns - The sign-in response containing the user id, username, and token
   */
  signIn(signInRequest: SignInRequest) {
    return this.http.post<SignInResponse>(`${this.basePath}authentication/sign-in`, signInRequest, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  /**
   * Sign out the current user
   */
  signOut() {
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedInUsername.next('');
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']).then();
  }

}
