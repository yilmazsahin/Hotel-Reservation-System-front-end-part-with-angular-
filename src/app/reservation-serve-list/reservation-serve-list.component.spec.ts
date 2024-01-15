import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationServeListComponent } from './reservation-serve-list.component';

describe('ReservationServeListComponent', () => {
  let component: ReservationServeListComponent;
  let fixture: ComponentFixture<ReservationServeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationServeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationServeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
