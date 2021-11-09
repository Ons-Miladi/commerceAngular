import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
product=new Product();
id:any;
data:any;
  constructor(private activatedRoute:ActivatedRoute,private service:ProductService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params.id;
    this.getProductById();
  }
  getProductById(){
return this.service.getProductById(this.id).subscribe(res=>{
this.data=res;
this.product=this.data;
})
  }
  EditProduct(){
this.service.updateProduct(this.id,this.product).subscribe(res=>{
  
})
  }

}
