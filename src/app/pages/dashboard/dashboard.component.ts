import { Component, OnInit } from '@angular/core';
import { Entrenador } from 'src/app/models/entrenador.model';
import { EntrenadorService } from 'src/app/services/entrenador.service';
import { MatDialog } from '@angular/material/dialog';
import { MatBasicComponent } from 'src/app/ng-material/mat-basic/mat-basic.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  entrenadores: Entrenador[] = [];
  p: number = 1;
  constructor(
    private _srvEntrenador: EntrenadorService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._srvEntrenador.obtenerEntrenadores().subscribe((respuesta) => {
      for (let e of respuesta['entrenadores']) {
        const entrenador = new Entrenador();
        entrenador.birth_date = e.birth_date;
        entrenador.email = e.email;
        entrenador.id = e.id;
        entrenador.name = e.name;
        entrenador.pokemons = JSON.parse(e.pokemons);
        entrenador.surnames = e.surnames;

        this.entrenadores.push(entrenador);
      }
    });
  }

  detalle(item: any) {
    const dialogRef = this.dialog.open(MatBasicComponent, {
      data: {
        entrenador: item,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
