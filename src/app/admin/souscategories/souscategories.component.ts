import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SousCategorie } from 'src/app/models/souscategorie.module';
import { SouscategoriesService } from 'src/app/services/souscategories.service';

@Component({
  selector: 'app-souscategories',
  templateUrl: './souscategories.component.html',
  styleUrls: ['./souscategories.component.css']
})
export class SouscategoriesComponent implements OnInit {
idcat:any;
souscategories:any;
souscateg=new SousCategorie();
  constructor(private ssouscatservice:SouscategoriesService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.idcat=this.activatedRoute.snapshot.params.id;
    this.getSouscategories();
  }
getSouscategories(){
  return this.ssouscatservice.getSouscategories(this.idcat).subscribe(res=>{
this.souscategories=res;
  })
}
delete(id){
  return this.ssouscatservice.delete(id).subscribe(res=>{
    this.getSouscategories();
  })
}
AddSousCategorie(){
  this.ssouscatservice.addSouscategorie(this.souscateg).subscribe(res=>{
    this.getSouscategories();
  })
}



}
