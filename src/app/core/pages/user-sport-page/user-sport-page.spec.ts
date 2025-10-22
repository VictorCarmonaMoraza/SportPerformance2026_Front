import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSport } from './user-sport-page';

describe('UserSport', () => {
  let component: UserSport;
  let fixture: ComponentFixture<UserSport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSport]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserSport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
