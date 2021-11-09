import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.module';
import { ProductService } from 'src/app/services/product.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any;
souscatid:any;
submitted=false;
files:any;
aa:any;
bb:any;
cc:any;
product=new Product();
  constructor(private productService:ProductService,private activateroute:ActivatedRoute) { }

  ngOnInit() {
 this.souscatid=this.activateroute.snapshot.params.id;
 this.getProducts();

  }
getProducts(){
  return this.productService.getProducts(this.souscatid).subscribe(res=>{
    this.products=res;
  })
}
AddProduct(){
 const formData=new FormData();
formData.append('image',this.files,this.files.name)
 this.aa=$("#price").val();
 this.bb=$("#name").val();
 this.cc=$("#souscatid").val();

formData.append("price",this.aa);
formData.append("name",this.bb);
formData.append("souscatid",this.cc);
  this.productService.addProduct(formData).subscribe(res=>{
   this.getProducts();
  })
}
delete(id){
  
  this.productService.deleteProduct(id).subscribe(res=>{
    this.getProducts();
  })
}
UploadImage(event){
this.files=event.target.files[0];
console.log(this.files);
}
}
