import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-paises-mostrar',
  templateUrl: './paises-mostrar.component.html',
  styleUrls: ['./paises-mostrar.component.css']
})
export class PaisesMostrarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public mostrarPais: any,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    console.log(this.mostrarPais)
  }

}
