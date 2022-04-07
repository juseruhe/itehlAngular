import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-cursos-mostrar',
  templateUrl: './cursos-mostrar.component.html',
  styleUrls: ['./cursos-mostrar.component.css']
})
export class CursosMostrarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public mostrarCurso: any,
  private dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
