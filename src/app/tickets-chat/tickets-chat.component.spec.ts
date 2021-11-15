import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsChatComponent } from './tickets-chat.component';

describe('TicketsChatComponent', () => {
  let component: TicketsChatComponent;
  let fixture: ComponentFixture<TicketsChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
