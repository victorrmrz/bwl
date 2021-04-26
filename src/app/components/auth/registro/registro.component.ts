import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from './../../../models/nuevo-usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {


  isLogged = false;
  isRegistered= false;
  isRegisteredFail = false;
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  email: string;
  password: string;
  password2: string;
  roles: string[] = [];
  errMsg: string;
  areEqual = true;

  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.isRegistered = true;
        this.isRegisteredFail = false;
        this.router.navigate(['/']);
      },
      err => {
        this.isRegistered = false;
        this.isRegisteredFail = true;
        this.errMsg = err.error.mensaje;
      }
    )
  }

  comparePasswords(): void {
    console.log("Comparando: ");
    console.log("pass: ", this.password);
    console.log("pass2: ",this.password2);
    if (this.password !== this.password2) {
      this.areEqual = false;
    } else {
      this.areEqual = true;
    }
  }

  returnToLogin() {
    this.router.navigate(['/']);
  }
}
