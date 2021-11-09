import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }
  private Url="http://127.0.0.1:8000/api/";
  public addCategorie(form){
    return this.http.post(this.Url+"AddCategorie",form);
  }
  public deleteCategorie(id){
    return this.http.delete(this.Url+"deleteCategorie/"+id);
  }
  public updateCategorie(id,form){
    return this.http.put(this.Url+"updateCategorie/"+id,form);
  }
  public getCategories(){
    return this.http.get(this.Url+"getCategories");
  }
  public getCategorieById(id){
    return this.http.get(this.Url+"getCategorieById/"+id);
  }
}
