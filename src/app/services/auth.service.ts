import { environment } from './../../environments/environment';
import { JwtDto } from './../models/jwt-dto';
import { LoginUsuario } from './../models/login-usuario';
import { NuevoUsuario } from './../models/nuevo-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(environment.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(environment.authURL + 'login', loginUsuario);
  }


}
