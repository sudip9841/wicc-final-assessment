import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserdetailsComponent } from './viewuserdetails.component';

describe('ViewuserdetailsComponent', () => {
  let component: ViewuserdetailsComponent;
  let fixture: ComponentFixture<ViewuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
