import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoModalidadService } from 'src/app/servicios/curso-modalidad.service';
import { CursosModalidadesEditarExitosoComponent } from '../cursos-modalidades-editar-exitoso/cursos-modalidades-editar-exitoso.component';
import { CursosModalidadesEliminarErrorComponent } from '../cursos-modalidades-eliminar-error/cursos-modalidades-eliminar-error.component';

@Component({
  selector: 'app-cursos-modalidades-eliminar',
  templateUrl: './cursos-modalidades-eliminar.component.html',
  styleUrls: ['./cursos-modalidades-eliminar.component.css']
})
export class CursosModalidadesEliminarComponent implements OnInit {
  cursoModalidadForm !: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public eliminarCursoModalidad: any,
  public dialog: MatDialog,private formBuilder:FormBuilder,
  private service: CursoModalidadService) { }

  ngOnInit(): void {
    this.cursoModalidadForm = this.formBuilder.group({
      id: ['',Validators.required]
    })

    if(this.eliminarCursoModalidad){
      this.cursoModalidadForm.controls["id"].setValue(this.eliminarCursoModalidad.id)
    }
  }

  borrarCursoModalidad(){
    if(this.cursoModalidadForm.valid){
      this.service.eliminarCursoModalidad(this.cursoModalidadForm.value.id).subscribe(respuesta => {
        this.dialog.closeAll()
        this.dialog.open(CursosModalidadesEditarExitosoComponent)
      }, error => {
        this.dialog.closeAll()
        this.dialog.open(CursosModalidadesEliminarErrorComponent)
      })
    }
  }

}
