import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileListComponent } from './social-profile-list.component';

describe('SocialProfileListComponent', () => {
  let component: SocialProfileListComponent;
  let fixture: ComponentFixture<SocialProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
