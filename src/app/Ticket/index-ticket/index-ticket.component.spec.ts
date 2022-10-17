import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTicketComponent } from './index-ticket.component';

describe('IndexTicketComponent', () => {
  let component: IndexTicketComponent;
  let fixture: ComponentFixture<IndexTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
