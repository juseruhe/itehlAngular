import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/servicios/curso.service';
import { CursosEliminarErrorComponent } from '../cursos-eliminar-error/cursos-eliminar-error.component';
import { CursosEliminarExitosoComponent } from '../cursos-eliminar-exitoso/cursos-eliminar-exitoso.component';

@Component({
  selector: 'app-cursos-eliminar',
  templateUrl: './cursos-eliminar.component.html',
  styleUrls: ['./cursos-eliminar.component.css']
})
export class CursosEliminarComponent implements OnInit {
  cursoForm !: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public eliminarCurso: any,
  public dialog: MatDialog,private formBuilder:FormBuilder,
  private service: CursoService) { }

  ngOnInit(): void {
    this.cursoForm = this.formBuilder.group({
      id: ['',Validators.required]
    })

    if(this.eliminarCurso){
      this.cursoForm.controls["id"].setValue(this.eliminarCurso.id)
    }
  }

  borrarCurso(){
    if(this.cursoForm.valid){
      this.service.eliminarCurso(this.cursoForm.value.id).subscribe(respuesta => {
        this.dialog.closeAll()
        this.dialog.open(CursosEliminarExitosoComponent)
      }, error => {
        this.dialog.closeAll()
        this.dialog.open(CursosEliminarErrorComponent)
      })
    }
  }

}
