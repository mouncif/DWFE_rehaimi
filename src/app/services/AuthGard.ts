import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UtilisateurService } from "../services/utilisateur.service";

@Injectable()
export class Authgard implements CanActivate {

  constructor(private router: Router, private userService: UtilisateurService) {}

  canActivate() {
    /*if (this.userService.isLoggedIn){
      console.log("fucked true");
      return true;
    }else{
      this.router.navigate(['/login']);
      console.log("fucked false");
      return false;
    }*/
    if (localStorage.getItem('loged') == null){
      this.router.navigate(['/login']);
      return false;
    }else{
      //console.log("can activate Reached  !!")
    //this.router.navigate(['/login']);
    return true;
    }

  }
}
