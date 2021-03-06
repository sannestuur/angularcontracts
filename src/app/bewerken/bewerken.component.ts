import { Component, OnInit, Input } from '@angular/core';
import { ContractenService } from '../contracten.service';
import { Zorgverzekeraar } from '../zorgverzekeraar';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bewerken',
  templateUrl: './bewerken.component.html',
  styleUrls: ['./bewerken.component.css']
})
export class BewerkenComponent implements OnInit {
  @Input() zorgverzekeraar: Zorgverzekeraar;

  constructor(private contractenService: ContractenService) { }

  ngOnInit() {
  }


  //todo: add it to app and pass it the correct zorgverzekeraar.id
  //todo: make sure initial values are set
  //todo: check that saving is correct

  //why do we not pass an argument here?
  save(): void {
    this.contractenService.editContract(this.zorgverzekeraar)
      // .subscribe(() => this.goBack());
  }
}
