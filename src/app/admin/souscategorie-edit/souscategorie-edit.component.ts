import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SousCategorie } from 'src/app/models/souscategorie.module';
import { SouscategoriesService } from 'src/app/services/souscategories.service';

@Component({
  selector: 'app-souscategorie-edit',
  templateUrl: './souscategorie-edit.component.html',
  styleUrls: ['./souscategorie-edit.component.css']
})
export class SouscategorieEditComponent implements OnInit {
id:any;
data:any;
souscat=new SousCategorie();
  constructor(private souscatservice:SouscategoriesService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedroute.snapshot.params.id;
    this.getDataById();
  }

  getDataById(){
    return this.souscatservice.getsoucategorieById(this.id).subscribe(res=>{
this.data=res;
this.souscat=this.data;

    })
  }
  updatesouscat(){
    return this.souscatservice.updateSousCategorie(this.id,this.souscat).subscribe(res=>{
      
    })
  }

}
