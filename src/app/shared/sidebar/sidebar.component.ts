import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] | undefined;
  constructor(
    private sidebarService: SidebarService,
    private _srvStorage: StorageService,
    private router: Router,
    private _srvAuth: AuthService
  ) {
    this.menuItems = sidebarService.menu;
  }

  ngOnInit(): void {}

  logout() {
    this._srvAuth.logout().subscribe((respuesta) => {
      this._srvStorage.remove('token');
      this.router.navigateByUrl('/home');
    });
  }
}
