
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { UserService } from 'src/app/services/user.service';
declare var Toast;
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

user:any;
  constructor(private serviceUser:UserService,private toastr:ToastrService) { }

  ngOnInit() {
    this.Connexion();

  }
public Connexion(){
  var message;
  this.serviceUser.connexion(this.user).subscribe(res=>{
    message=res;
  console.log(message);
  Toast.fire({
      type:"success",
      title:message.message,

    },
    error=>{error.error.error.forEach(element=>{Toast.error("Error",element);})} );
     
    

  })
}
showToastr(){
  this.toastr.success("hello",'fun');
}
}
