import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modalidades-mostrar',
  templateUrl: './modalidades-mostrar.component.html',
  styleUrls: ['./modalidades-mostrar.component.css']
})
export class ModalidadesMostrarComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public mostrarModalidad: any,
  private dialog:MatDialog) { }

  ngOnInit(): void {
   
  }

}
