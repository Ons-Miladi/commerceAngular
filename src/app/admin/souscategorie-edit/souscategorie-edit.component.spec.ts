import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscategorieEditComponent } from './souscategorie-edit.component';

describe('SouscategorieEditComponent', () => {
  let component: SouscategorieEditComponent;
  let fixture: ComponentFixture<SouscategorieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscategorieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscategorieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
