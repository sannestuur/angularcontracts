import { Injectable } from '@angular/core';
import { Zorgverzekeraar } from './zorgverzekeraar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContractenService {
  private contractenUrl = 'api/contractpartijen';  // URL to web api


  constructor(
    private http: HttpClient,
  ) { }

  getContracten (): Observable<Zorgverzekeraar[]> {
    return this.http.get<Zorgverzekeraar[]>(this.contractenUrl);
  }

  getContract(id: number): Observable<Zorgverzekeraar> {
    const url = `${this.contractenUrl}/${id}`;
    return this.http.get<Zorgverzekeraar>(url).pipe(
      tap(_ => console.log(`fetched zorgverzekeraar id=${id}`)),
      catchError(this.handleError<Zorgverzekeraar>(`getContract id=${id}`))
    );
  }

  deleteContract (zorgverzekeraar: Zorgverzekeraar| number): Observable<Zorgverzekeraar> {
    const id = typeof zorgverzekeraar === 'number' ? zorgverzekeraar : zorgverzekeraar.id;
    const url = `${this.contractenUrl}/${id}`;

    return this.http.delete<Zorgverzekeraar>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted zorgverzekeraar id=${id}`)),
      catchError(this.handleError<Zorgverzekeraar>('deleteZorgverzekeraar'))
    );
  }

  editContract (zorgverzekeraar: Zorgverzekeraar): Observable<any> {
    return this.http.put(this.contractenUrl, zorgverzekeraar, httpOptions).pipe(
      tap(_ => console.log(`updated zorgverzekeraar id=${zorgverzekeraar.id}`)),
      catchError(this.handleError<any>('updateZorgverzekeraar'))
    );
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
