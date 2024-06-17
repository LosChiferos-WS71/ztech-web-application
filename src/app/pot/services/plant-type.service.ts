import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ParameterResponse, PlantTypeDetailsResponse, PlantTypeResponse } from '../models/plant-type.model';

@Injectable({
  providedIn: 'root'
})
export class PlantTypeService {

  baseUrl = environment.api + "plant/types"

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

  getAllPlantTypes(): Observable<PlantTypeResponse[]> {
    return this.http
      .get<PlantTypeResponse[]>(`${this.baseUrl}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPlantTypeByName(name: string): Observable<PlantTypeResponse> {
    return this.http
      .post<PlantTypeResponse>(`${this.baseUrl}/name`, name, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPlantTypeById(id: number): Observable<PlantTypeResponse> {
    return this.http
      .get<PlantTypeResponse>(`${this.baseUrl}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getParametersByPlantTypeId(plantTypeId: number): Observable<ParameterResponse[]> {
    return this.http
      .get<ParameterResponse[]>(`${this.baseUrl}/${plantTypeId}/parameters`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPlantTypeDetails(plantTypeId: number): Observable<PlantTypeDetailsResponse> {
    return this.http
      .get<PlantTypeDetailsResponse>(`${this.baseUrl}/${plantTypeId}/details`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
