import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleCardComponent } from './salle-card.component';

describe('SalleCardComponent', () => {
  let component: SalleCardComponent;
  let fixture: ComponentFixture<SalleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
