import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

import { FormsModule } from '@angular/forms';

import { MainheaderComponent } from './mainheader/mainheader.component';
import { TopsearchComponent } from './topsearch/topsearch.component';

import { CategoriesshopComponent } from './categoriesshop/categoriesshop.component';
import { ProductsshopComponent } from './productsshop/productsshop.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [DefaultComponent, MainheaderComponent, TopsearchComponent,CategoriesshopComponent, ProductsshopComponent, FooterComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    FormsModule
  ]
})
export class DefaultModule { }
