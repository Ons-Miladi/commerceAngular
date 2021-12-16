import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user=new User();
  constructor(private serviceUser:UserService,private route:Router) { }

  ngOnInit() {
    this.Register();
  }
  Register(){
    const navigationDetails: string[] = ['/gestion/connexion'];
   
    this.serviceUser.register(this.user).subscribe(res=>{
    
      this.route.navigate(navigationDetails);
  
    })
  }
 
}
