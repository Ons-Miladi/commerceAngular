import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/categorie.module';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent implements OnInit {
categorie=new Categorie();
data:any;
id:any;
  constructor(private activatedRoute:ActivatedRoute,private dataservice:CategorieService) { }

  ngOnInit() {
  this.id=this.activatedRoute.snapshot.params.id;
  this.getData();
  }
  getData(){
this.dataservice.getCategorieById(this.id).subscribe(res=>{
  this.data=res;
  this.categorie=this.data;
})
  }
  updateCategorie(){
    this.dataservice.updateCategorie(this.id,this.categorie).subscribe(res=>{
            
    })
  }
}
