import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesshopComponent } from './categoriesshop.component';

describe('CategoriesshopComponent', () => {
  let component: CategoriesshopComponent;
  let fixture: ComponentFixture<CategoriesshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
