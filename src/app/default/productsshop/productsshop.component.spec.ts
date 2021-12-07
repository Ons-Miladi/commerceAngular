import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsshopComponent } from './productsshop.component';

describe('ProductsshopComponent', () => {
  let component: ProductsshopComponent;
  let fixture: ComponentFixture<ProductsshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
