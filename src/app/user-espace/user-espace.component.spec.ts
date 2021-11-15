import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEspaceComponent } from './user-espace.component';

describe('UserEspaceComponent', () => {
  let component: UserEspaceComponent;
  let fixture: ComponentFixture<UserEspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
