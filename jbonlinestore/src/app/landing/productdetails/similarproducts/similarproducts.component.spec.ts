import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarproductsComponent } from './similarproducts.component';

describe('SimilarproductsComponent', () => {
  let component: SimilarproductsComponent;
  let fixture: ComponentFixture<SimilarproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
