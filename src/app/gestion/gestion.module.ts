import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './register/register.component';
import { DproductsComponent } from './dproducts/dproducts.component';
import { GestionComponent } from './gestion.component';
import { FormsModule } from '@angular/forms';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';

@NgModule({
  declarations: [GestionComponent,ConnexionComponent,RegisterComponent,DproductsComponent, CaracteristiquesComponent],
  imports: [
    CommonModule,
    GestionRoutingModule,
    FormsModule
  ]
})
export class GestionModule { }
