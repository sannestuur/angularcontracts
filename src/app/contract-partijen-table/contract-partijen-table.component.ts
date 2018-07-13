import { Component, OnInit } from '@angular/core';
import { CONTRACTPARTIJEN } from '../contractpartijen'

@Component({
  selector: 'app-contract-partijen-table',
  templateUrl: './contract-partijen-table.component.html',
  styleUrls: ['./contract-partijen-table.component.css']
})
export class ContractPartijenTableComponent implements OnInit {

  contractpartijen = CONTRACTPARTIJEN;

  constructor() { }

  ngOnInit() {
  }

}
