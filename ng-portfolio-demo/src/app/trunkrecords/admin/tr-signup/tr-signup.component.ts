import { Component, OnInit } from '@angular/core';
import { TrCommonService } from '../../services/tr-common.service';

@Component({
  selector: 'app-tr-signup',
  templateUrl: './tr-signup.component.html',
  styleUrls: ['./tr-signup.component.scss']
})
export class TrSignupComponent implements OnInit {
  username: string = '';
  email:string ='';
  password: string = '';
  showMessage = 'none';
  signupStatus = false;
  errorMessage: any = '';


  constructor(private cs:TrCommonService) { }

  register(username:any, email:any, password1:any){
    let newuser ={
      "username":this.username,
      "email":this.email,
      "password":this.password
    }
    this.cs.register(newuser).subscribe(res =>{
      console.log(res);
      this.showMessage ='block'
      this.signupStatus = true;
    })
  }

  ngOnInit(): void {
  }

}
