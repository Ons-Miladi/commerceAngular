
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';
declare var Toast;
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

user=new User();
loggedUser:any;
eureur=0;
  constructor(private serviceUser:UserService,private toastr:ToastrService,private route:Router) { }

  ngOnInit() {
    this.Connexion();

  }
public Connexion(){
  
  const adminNavigation: string[] = ['/admin/categories'];
  
   const connexion :string []=['/gestion/connexion'];
  this.serviceUser.connexion(this.user).subscribe(res=>{
    var message;
    message=res;
  // console.log(message);
  
  if(message!=null){
    if(message==111){
      console.log('eee');
      this.eureur=1;
     }
   
     else if(message==11){
      this.route.navigate(adminNavigation);
      
    
     }
     else if(message==12){
       console.log('you should fill the form');
       alert('remplir');
     }
     else{
  
  this.loggedUser=message.id;
  const clientNavigation : string[]=['/welcomeClient/'+this.loggedUser];
  this.route.navigate(clientNavigation);
  console.log(this.loggedUser);
     }
 }

     
  })
}

}
