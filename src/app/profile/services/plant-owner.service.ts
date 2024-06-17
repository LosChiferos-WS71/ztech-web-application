import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { PlantOwnerRequest, PlantOwnerResponse } from '../models/plant-owner.model';

@Injectable({
  providedIn: 'root'
})
export class PlantOwnerService {

  baseUrl = environment.api + "plant/owners"

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

  createPlantOwner(plantOwnerRequest: PlantOwnerRequest) {
    return this.http
      .post(`${this.baseUrl}`, plantOwnerRequest, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPlantOwnerByEmail(email: string): Observable<PlantOwnerResponse> {
    return this.http
      .post<PlantOwnerResponse>(`${this.baseUrl}/email`, email, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPlantOwnerById(id: number): Observable<PlantOwnerResponse> {
    return this.http
      .get<PlantOwnerResponse>(`${this.baseUrl}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updatePlantOwner(plantOwnerId: number, plantOwnerRequest: PlantOwnerRequest) {
    return this.http
      .put(`${this.baseUrl}/${plantOwnerId}`, plantOwnerRequest, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}