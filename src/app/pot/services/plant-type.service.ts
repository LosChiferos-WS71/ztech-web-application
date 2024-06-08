import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

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

  getAllPlantTypes(): Observable<any> {
    return this.http
      .get(`${this.baseUrl}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getPlantTypeByName(name: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/name`, name, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
