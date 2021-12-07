import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from './gestion.component';

import { DproductsComponent } from '../gestion/dproducts/dproducts.component';
import { RegisterComponent } from '../gestion/register/register.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';




const routes: Routes = [
  {path:'',component:GestionComponent,children:[
    {path:'dproducts/:id',component:DproductsComponent},
    {path:'register',component:RegisterComponent},
    {path:'connexion',component:ConnexionComponent},
    {path:'caracteristiques/:id',component:CaracteristiquesComponent}
   
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
