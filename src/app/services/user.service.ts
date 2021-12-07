import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private url='http://127.0.0.1:8000/api/';
  public register(form){
return this.http.post(this.url+'Clientinscription',form);
  }
  public connexion(form){
    return this.http.put(this.url+'UserConnexion',form);
  }
  public joincategsouscateg(){
    return this.http.get(this.url+'joincategsouscateg');
  }
}
