import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaractService } from 'src/app/services/caract.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.css']
})
export class CaracteristiquesComponent implements OnInit {
id;any;
data:any;
jointure:any;
  constructor(private serviceproduct:ProductService,private servicexcaracteri:CaractService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params.id;
this.getData();
this.getJointureCaracte();
  }
getData(){
  return this.servicexcaracteri.getcaracts(this.id).subscribe(res=>{
    this.data=res;

  })
}
getJointureCaracte(){
  return  this.servicexcaracteri.getCaractJointure(this.id).subscribe(res=>{
    this.jointure=res;
  })
}
}
