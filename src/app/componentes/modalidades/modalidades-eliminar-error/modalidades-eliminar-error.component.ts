import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modalidades-eliminar-error',
  templateUrl: './modalidades-eliminar-error.component.html',
  styleUrls: ['./modalidades-eliminar-error.component.css']
})
export class ModalidadesEliminarErrorComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public eliminarStatus: any) { }

  ngOnInit(): void {
  }

}
