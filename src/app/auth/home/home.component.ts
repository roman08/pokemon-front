import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router,
              private _srvAuth: AuthService,
              private _srvStorage: StorageService) {}

  ngOnInit(): void {
    // let data = {
    //   email: 'rmcentinela@gmail.com', //de modal
    //   password: '123456281', // del modal
    // };
    
    // this._srvAuth.login(data).subscribe((data) => {
    //   console.log(data['access_token']);
    //   this._srvStorage.set('token', data['access_token']);
      
    // });
  }

  login() {
    // const token = JSON.parse(this._srvStorage.get('token'));
    // console.log(token);
    
    // this.router.navigateByUrl('/');
  }
}
