import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrCommonService } from '../../services/tr-common.service';

@Component({
  selector: 'app-tr-login',
  templateUrl: './tr-login.component.html',
  styleUrls: ['./tr-login.component.scss']
})
export class TrLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  showMessage = 'none';
  loginStatus = true;
  errorMessage: any = '';

  constructor(private cs:TrCommonService, private router:Router) { }


  login(username:any, password:any){
    let loginData = {
      "identifier": this.username,
      "password": this.password
    }
    this.cs.login(loginData).subscribe(res =>{
      console.log(res.jwt);
      if(res.jwt){
        localStorage.setItem('jwt', res.jwt);
        this.router.navigate(['/trunkrecords/admin/home']);
      }
    })
  }

  ngOnInit(): void {
  }

}
