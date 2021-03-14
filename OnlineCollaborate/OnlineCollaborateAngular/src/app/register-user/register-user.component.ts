import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
 

  constructor(private userservice:UserService) { }  
  user : User=new User();  
  submitted = false;  

  ngOnInit(): void {
  }
  registrationform=new FormGroup({  
    firstName:new FormControl('' , [Validators.required  ] ),  
    lastName:new FormControl('' , [Validators.required  ] ),
    username:new FormControl('' , [Validators.required  ] ),  
    password:new FormControl('' , [Validators.required  ] ),
    confirm_password:new FormControl('' , [Validators.required  ] ),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    role:new FormControl('' , [Validators.required  ] ), 
    status:new FormControl('' , [Validators.required   ] ),  
  });
  
  saveUser(saveUser){  
    this.user=new User();     
    this.user.firstName=this.firstName.value;
    this.user.lastName=this.lastName.value;   
    this.user.username=this.username.value; 
    this.user.password=this.password.value; 
    this.user.confirm_password=this.Confirm_Password.value; 
    this.user.email=this.email.value;  
    this.user.role=this.role.value;
     
    if(this.user.role=="Admin") {
      this.user.enabled="true";
      this.user.status="Active";
    }
    else{
      this.user.enabled="false";
      this.user.status="Inactive";
    }
    this.user.isOnline="false";
    this.submitted=true;
    this.save();  
  }  
  save() {
    this.userservice.createUser(this.user)  
    .subscribe(data => console.log(data), error => console.log(error));  
  this.user = new User();  
}
get firstName(){  
  return this.registrationform.get('firstName');  
}  
get lastName(){  
  return this.registrationform.get('lastName');  
}  

get username(){  
  return this.registrationform.get('username');  
}  
get password(){  
  return this.registrationform.get('password');  
}  
get Confirm_Password(){  
  return this.registrationform.get('confirm_password');  
}  

get role(){  
  return this.registrationform.get('role');  
}  
get email(){  
  return this.registrationform.get('email');  
}  
 

addUser(){  
  this.submitted=false;  
  this.registrationform.reset();  
}  



}
