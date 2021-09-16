import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecepientComponent } from './add-recepient.component';

describe('AddRecepientComponent', () => {
  let component: AddRecepientComponent;
  let fixture: ComponentFixture<AddRecepientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecepientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecepientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
