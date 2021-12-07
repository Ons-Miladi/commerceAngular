import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractEditComponent } from './caract-edit.component';

describe('CaractEditComponent', () => {
  let component: CaractEditComponent;
  let fixture: ComponentFixture<CaractEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaractEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
