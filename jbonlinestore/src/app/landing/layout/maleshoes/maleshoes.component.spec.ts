import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleshoesComponent } from './maleshoes.component';

describe('MaleshoesComponent', () => {
  let component: MaleshoesComponent;
  let fixture: ComponentFixture<MaleshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaleshoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
