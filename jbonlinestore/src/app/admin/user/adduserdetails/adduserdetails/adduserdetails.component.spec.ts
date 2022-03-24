import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserdetailsComponent } from './adduserdetails.component';

describe('AdduserdetailsComponent', () => {
  let component: AdduserdetailsComponent;
  let fixture: ComponentFixture<AdduserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
