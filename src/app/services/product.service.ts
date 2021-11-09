import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private baseURL="http://127.0.0.1:8000/api/";
  public addProduct(form){
return this.http.post(this.baseURL+"addProduct",form);
  }
  public deleteProduct(id){
    return this.http.delete(this.baseURL+"deleteProduct/"+id);
  }
  public updateProduct(id,form){
    return this.http.put(this.baseURL+"updateProduct/"+id,form);
  }
  public getProducts(souscatid){
    return this.http.get(this.baseURL+"getProducts/"+souscatid);
  }
  public  getProductById(id){
return this.http.get(this.baseURL+"getProductById/"+id);
  }
}
