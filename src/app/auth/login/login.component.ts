import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private _srvAuth: AuthService,
    private _srvStorage: StorageService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // this._srvStorage.remove('token');
  }

  login() {
    const email = this.loginForm.value['correo'];
    const password = this.loginForm.value['password'];

    let data = {
      email: email, //de modal
      password: password, // del modal'123456281'
    };

    this._srvAuth.login(email, password).subscribe((respuesta) => {
      console.log(respuesta.status);
      if (respuesta.status === 'success') {
        this._srvStorage.set('token', respuesta['access_token']);
        this.router.navigateByUrl('/dashboard');
      } else {
        swal.fire('Alerta', respuesta.message,'error');
        console.log(respuesta.message);
      }
    });

    // const token = JSON.parse(this._srvStorage.get('token'));
    // console.log(token);
  }

  get correo() {
    return this.loginForm.get('correo');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
