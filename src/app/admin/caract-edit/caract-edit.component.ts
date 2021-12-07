import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Caract } from 'src/app/models/caract.module';
import { CaractService } from 'src/app/services/caract.service';

@Component({
  selector: 'app-caract-edit',
  templateUrl: './caract-edit.component.html',
  styleUrls: ['./caract-edit.component.css']
})
export class CaractEditComponent implements OnInit {
carac=new Caract();
data:any;
idproduct:any;
  constructor(private activatedRoute:ActivatedRoute,private servicecara:CaractService) { }

  ngOnInit() {
this.idproduct=this.activatedRoute.snapshot.params.id;
this.getData();
}

  Updatecaract(){
return this.servicecara.Updatecarac(this.carac,this.idproduct).subscribe(res=>{
  
})
  }
  getData(){
return this.servicecara.getcaractBYId(this.idproduct).subscribe(res=>{
  this.data=res;
  this.carac=this.data;
})
  }
}
