import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user=new User();
  constructor(private serviceUser:UserService) { }

  ngOnInit() {
    this.Register();
  }
  Register(){
    this.serviceUser.register(this.user).subscribe(res=>{
   
    })
  }

}
