import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';


import { AsidbarComponent } from './asidbar/asidbar.component';

import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SouscategoriesComponent } from './souscategories/souscategories.component';
import { SouscategorieEditComponent } from './souscategorie-edit/souscategorie-edit.component';
import { CaractComponent } from './caract/caract.component';
import { CaractEditComponent } from './caract-edit/caract-edit.component';


@NgModule({
  declarations: [AdminComponent, ProductsComponent, AsidbarComponent, FooterComponent, CategoriesComponent, CategorieEditComponent, ProductEditComponent, SouscategoriesComponent, SouscategorieEditComponent, CaractComponent, CaractEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
