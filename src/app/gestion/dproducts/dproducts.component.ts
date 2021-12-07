import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dproducts',
  templateUrl: './dproducts.component.html',
  styleUrls: ['./dproducts.component.css']
})
export class DproductsComponent implements OnInit {
id:any;
data:any;

  constructor(private actiavatedRoute:ActivatedRoute,private productsservices:ProductService) { }

  ngOnInit() {
    this.id=this.actiavatedRoute.snapshot.params.id;
  this.getData();
  }
getData(){
 return  this.productsservices.getProducts(this.id).subscribe(res=>{
    this.data=res;
  
  })
}
}
