import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '../services/user-login.service';
import { LoginResponseModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authService: UserLoginService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Obtén la información almacenada en el sessionStorage
    const sessionStorageResponse = this.authService.getUserInfo();

    // Verifica si la información contiene el campo 'id_Rol_Gestion' con valor igual a 1
    if (sessionStorageResponse && sessionStorageResponse.usuario.id_Rol_Gestion === 1) {
      return true; // Permite el acceso a la ruta
    } else {
      // Si el campo no es igual a 1 o la información no está disponible, redirige a la ruta de inicio
      this.router.navigate(['/no-admin']);
      return false; // No permite el acceso a la ruta
    }
  }
}
