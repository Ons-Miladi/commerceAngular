import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CaractEditComponent } from './caract-edit/caract-edit.component';
import { CaractComponent } from './caract/caract.component';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';
import { SouscategorieEditComponent } from './souscategorie-edit/souscategorie-edit.component';
import { SouscategoriesComponent } from './souscategories/souscategories.component';

const routes: Routes = [
  {path:'',component:AdminComponent,
children:[
  {path:'products/:id',component:ProductsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'editcat/:id',component:CategorieEditComponent},
{path:'editpro/:id',component:ProductEditComponent},
{path:'souscategories/:id',component:SouscategoriesComponent},
{path:'editsouscat/:id',component:SouscategorieEditComponent},
{path:'caract/:id',component:CaractComponent},
{path:'editcaract/:id',component:CaractEditComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
