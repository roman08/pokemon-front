import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/dashboard',
        },
        {
          titulo: 'Estadisticas',
          url: 'estadisticas',
        }
      ],
    },
  ];
  constructor() {}
}
