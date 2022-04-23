import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-descuentos-editar-error',
  templateUrl: './descuentos-editar-error.component.html',
  styleUrls: ['./descuentos-editar-error.component.css']
})
export class DescuentosEditarErrorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public error: any) { }

  ngOnInit(): void {
  }

}
