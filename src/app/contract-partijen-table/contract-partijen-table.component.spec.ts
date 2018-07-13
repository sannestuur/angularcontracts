import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPartijenTableComponent } from './contract-partijen-table.component';

describe('ContractPartijenTableComponent', () => {
  let component: ContractPartijenTableComponent;
  let fixture: ComponentFixture<ContractPartijenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPartijenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPartijenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
