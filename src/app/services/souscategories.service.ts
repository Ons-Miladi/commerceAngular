import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SouscategoriesService {

  constructor(private http:HttpClient) { }

  private url="http://127.0.0.1:8000/api/";
  public addSouscategorie(form){
     return this.http.post(this.url+'AddSouscategorie',form);
  }
  public getSouscategories(catid){
    return this.http.get(this.url+'getSousCategories/'+catid)
  }
  public delete(id){
    return this.http.delete(this.url+'deletSouscat/'+id);
  }
  public getsoucategorieById(id){
    return this.http.get(this.url+'getSouscategorieById/'+id);
  }
  public updateSousCategorie(id,form){
    return this.http.put(this.url+'updateSousCategorie/'+id,form);
  }
}
