import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.module';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories:any;
categorie=new Categorie();
  constructor(private categorieservice:CategorieService) { }

  ngOnInit() {
  this.getcategoris();
  }
getcategoris(){
  this.categorieservice.getCategories().subscribe(res=>{this.categories=res;})
}


deleteCat(id){
  this.categorieservice.deleteCategorie(id).subscribe(res=>{
    this.getcategoris();
  })
}/*
updatecat(id,form){
this.categorieservice.updateCategorie(id,form).subscribe(res=>{
  this.getcategoris();
})
}*/

insertData(){
  this.categorieservice.addCategorie(this.categorie).subscribe(res=>{
    this.getcategoris();
  })
}
}
