import { Injectable } from '@angular/core';
import { Zorgverzekeraar } from './zorgverzekeraar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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


}
