import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BewerkenComponent } from './bewerken.component';

describe('BewerkenComponent', () => {
  let component: BewerkenComponent;
  let fixture: ComponentFixture<BewerkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BewerkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BewerkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
