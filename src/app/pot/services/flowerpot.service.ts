import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { GetFlowerpot } from '../models/flowerpot.model';

@Injectable({
  providedIn: 'root'
})
export class FlowerpotService {

  baseUrl = environment.api + "flowerpots"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
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

  getFlowerpotByCode(code: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/code`, code, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}