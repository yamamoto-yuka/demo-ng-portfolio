import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TrCommonService } from '../services/tr-common.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private cs:TrCommonService, private router:Router){}

  canActivate(){
    if(this.cs.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/trunkrecords/admin/login']);
      return false;
    }
  }
  
}
