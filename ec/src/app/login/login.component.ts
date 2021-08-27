import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 password:string;
 mailid: string;
 user: number=0;
 title = 'email-validation-tutorial';
  loginform = new FormGroup({
	email: new FormControl('',[Validators.required,Validators.email]),
	pass: new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
 
  get email(){
    return this.loginform.get('email')
  }
  get pass(){
    return this.loginform.get('pass')
  }
  constructor() { }

  ngOnInit(): void {
  }
  Loginuser()
  {
    if(this.password=="seneca123" && this.mailid=="shravani@abc")
    {
       this.user=1;
      
    }
    else{
      this.user=2;
    }
  }

}
