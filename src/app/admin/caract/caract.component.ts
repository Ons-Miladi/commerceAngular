import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Caract } from 'src/app/models/caract.module';
import { CaractService } from 'src/app/services/caract.service';

@Component({
  selector: 'app-caract',
  templateUrl: './caract.component.html',
  styleUrls: ['./caract.component.css']
})
export class CaractComponent implements OnInit {
idproduct:any;
data:any;
caract=new Caract();
aa:any;
bb:any;
cc:any;
dd:any;
caracts:any;
  constructor(private actiav:ActivatedRoute,private service:CaractService) { }

  ngOnInit() {
    this.idproduct=this.actiav.snapshot.params.id;
   
this.getCaract();
  }
getCaract(){
     return this.service.getcaracts(this.idproduct).subscribe(res=>{
      
      this.caracts=res;
     })
}

deleteCaract(id){
  return this.service.deletcarat(id).subscribe(res=>{
    this.getCaract();
  })
}   
Addcaract(){
  const formData=new FormData();
  this.aa=$("#taille").val();
 this.bb=$("#couleur").val();
 this.cc=$("#quantite").val();
 this.dd=$("#idproduct").val();


formData.append("taille",this.aa);
formData.append("couleur",this.bb);

formData.append("quantite",this.cc);
formData.append("idproduct",this.dd);
  this.service.Addcaract(formData).subscribe(res=>{
    this.getCaract();
  })
}      
}
