import { Injectable } from '@angular/core';
import {Pet} from './pet';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private petUrl = 'https://localhost:5001/api/pet';

  constructor(private http: HttpClient) {
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petUrl)
      .pipe(
        catchError(this.handleError<Pet[]>('getHeroes', []))
      );
  }

  getPet(id: number): Observable<Pet> {
    const url = `${this.petUrl}/${id}`;
    return this.http.get<Pet>(url);
  }
  updatePet(id: number, pet: Pet): Observable<Pet> {
    const url = `${this.petUrl}/${id}`;
    console.log(url);
    return this.http.put<Pet>(url, pet);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
