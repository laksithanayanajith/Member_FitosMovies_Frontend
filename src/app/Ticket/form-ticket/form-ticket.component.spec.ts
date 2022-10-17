import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTicketComponent } from './form-ticket.component';

describe('FormTicketComponent', () => {
  let component: FormTicketComponent;
  let fixture: ComponentFixture<FormTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
