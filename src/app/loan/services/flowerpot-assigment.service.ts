import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { SendFlowerpotAssigment } from '../models/flowerpot-assigment.model';

@Injectable({
  providedIn: 'root'
})
export class FlowerpotAssigmentService {

  baseUrl = environment.api + "flowerpot/assignments"

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

  createFlowerpotAssigment(flowerpotAssigment: SendFlowerpotAssigment) {
    return this.http
      .post(`${this.baseUrl}`, JSON.stringify(flowerpotAssigment), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
