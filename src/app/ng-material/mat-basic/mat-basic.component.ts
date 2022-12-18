import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entrenador } from 'src/app/models/entrenador.model';

@Component({
  selector: 'app-mat-basic',
  templateUrl: './mat-basic.component.html',
  styleUrls: ['./mat-basic.component.css'],
})
export class MatBasicComponent implements OnInit {
  entrenador: Entrenador | undefined;
  constructor(
    public dialogRef: MatDialogRef<MatBasicComponent>,
    @Inject(MAT_DIALOG_DATA) data: { entrenador: Entrenador }
  ) {
    this.entrenador =  data.entrenador;
    
    
  }

  ngOnInit(): void {}
}
