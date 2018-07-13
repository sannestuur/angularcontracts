import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractPartijenContainerComponent } from './contract-partijen-container.component';

describe('ContractPartijenContainerComponent', () => {
  let component: ContractPartijenContainerComponent;
  let fixture: ComponentFixture<ContractPartijenContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPartijenContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractPartijenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
