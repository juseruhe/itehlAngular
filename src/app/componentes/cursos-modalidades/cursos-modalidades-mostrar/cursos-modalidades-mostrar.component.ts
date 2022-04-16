import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-cursos-modalidades-mostrar',
  templateUrl: './cursos-modalidades-mostrar.component.html',
  styleUrls: ['./cursos-modalidades-mostrar.component.css']
})
export class CursosModalidadesMostrarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public mostrarCursoModalidad: any,
  private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
