import { Injectable } from '@angular/core';
import { Zorgverzekeraar } from './zorgverzekeraar';
import { CONTRACTPARTIJEN } from './contractpartijen';

@Injectable({
  providedIn: 'root'
})
export class ContractenService {

  constructor() { }

  getContracten(): Zorgverzekeraar[] {
    return CONTRACTPARTIJEN;
  }
}
