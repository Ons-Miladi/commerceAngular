import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaractService {

  constructor(private http:HttpClient) { }

private url='http://127.0.0.1:8000/api/';
getcaracts(idproduct){
  return this.http.get(this.url+'getcarectristiques/'+idproduct);
}
deletcarat(id){
  return this.http.delete(this.url+'deletecaract/'+id);
}
Addcaract(form){
  return this.http.post(this.url+'AddcaractProduit',form);
}
getcaractBYId(id){
  return this.http.get(this.url+'getCaract/'+id)
}
Updatecarac(form,id){
  return this.http.put(this.url+'updateCaract/'+id,form);
}
getCaractJointure(id){
  return this.http.get(this.url+'getCaracteristiquesByJointure/'+id);
}
AddProductToPanier(form){
  return this.http.post(this.url+'AddProductToPanier',form);
}


}