import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { FlowerpotAssignmentRequest, FlowerpotAssignmentResponse } from '../models/flowerpot-assignment.model';

@Injectable({
  providedIn: 'root'
})
export class FlowerpotAssignmentService {

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

  createFlowerpotAssignment(flowerpotAssigmentRequest: FlowerpotAssignmentRequest) {
    return this.http
      .post(`${this.baseUrl}`, flowerpotAssigmentRequest, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getFlowerpotIdsByPlantOwnerId(plantOwnerId: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/plant/owner/${plantOwnerId}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getFlowerpotAssignmentByFlowerpotId(flowerpotId: number) {
    return this.http
      .post<FlowerpotAssignmentResponse>(`${this.baseUrl}/flowerpotId`, flowerpotId, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPlantTypeIdsByPlantOwnerId(plantOwnerId: number) {
    return this.http
      .post<number[]>(`${this.baseUrl}/plant/owner/plantTypeIds`, plantOwnerId, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
