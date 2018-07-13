import { Component, OnInit } from '@angular/core';
import { ContractenService } from '../contracten.service';
import { Zorgverzekeraar } from '../zorgverzekeraar';

@Component({
  selector: 'app-contract-partijen-table',
  templateUrl: './contract-partijen-table.component.html',
  styleUrls: ['./contract-partijen-table.component.css']
})
export class ContractPartijenTableComponent implements OnInit {

  contractpartijen: Zorgverzekeraar[];

  constructor(private contractenService: ContractenService) { }

  ngOnInit() {
    this.getContracten();
  }

  getContracten(): void {
    this.contractenService.getContracten()
    .subscribe(contractpartijen => this.contractpartijen = contractpartijen);
  }

  delete(zorgverzekeraar: Zorgverzekeraar): void {
    this.contractpartijen = this.contractpartijen.filter(c => c !== zorgverzekeraar);
    this.contractenService.deleteContract(zorgverzekeraar).subscribe();
  }

}
