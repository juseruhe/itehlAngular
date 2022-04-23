import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-descuentos-mostrar',
  templateUrl: './descuentos-mostrar.component.html',
  styleUrls: ['./descuentos-mostrar.component.css']
})
export class DescuentosMostrarComponent implements OnInit {
  pipe = new DatePipe('en-US');

  constructor(@Inject(MAT_DIALOG_DATA) public mostrarDescuento: any,
  private dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
