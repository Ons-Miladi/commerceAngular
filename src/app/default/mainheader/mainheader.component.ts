import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieSousCateg } from 'src/app/models/categorieSousCategories.module';
import { CategorieService } from 'src/app/services/categorie.service';
import { SouscategoriesService } from 'src/app/services/souscategories.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {
jointure :any;
categories:any;
//souscategs:any;
id:any;
  constructor(private userservice:UserService,private route:ActivatedRoute,private categorieService:CategorieService, private souscateg:SouscategoriesService ) {
   
    /*this.route.queryParams.subscribe(params => {
      this.id = params['id'];
     
  });*/

   }

  ngOnInit() {
    this.getCategoriesNames();
   //this.getsouscategor();
   this.joincategsouscateg();
  
  }

  joincategsouscateg(){
return  this.userservice.joincategsouscateg().subscribe(res=>{
  this.jointure=res;
})
  }
getCategoriesNames(){
return this.categorieService.getCategories().subscribe(res=>{
  this.categories=res;

})
}/*
getsouscategor(){
  return this.souscateg.getSouscategories(this.id).subscribe(res=>{
this.souscategs=res;
  })
}*/
}
