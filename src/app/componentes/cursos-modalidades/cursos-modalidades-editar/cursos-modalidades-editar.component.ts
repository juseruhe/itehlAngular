import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoModalidadService } from 'src/app/servicios/curso-modalidad.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { ModalidadService } from 'src/app/servicios/modalidad.service';
import { CursosEditarErrorComponent } from '../../cursos/cursos-editar-error/cursos-editar-error.component';
import { CursosModalidadesEditarExitosoComponent } from '../cursos-modalidades-editar-exitoso/cursos-modalidades-editar-exitoso.component';

@Component({
  selector: 'app-cursos-modalidades-editar',
  templateUrl: './cursos-modalidades-editar.component.html',
  styleUrls: ['./cursos-modalidades-editar.component.css']
})
export class CursosModalidadesEditarComponent implements OnInit {
  cursoModalidadForm !: FormGroup
  modalidades: any
  cursos:any

  constructor(@Inject(MAT_DIALOG_DATA) public editarCursoModalidad: any,
  private dialog: MatDialog, private formBuilder: FormBuilder,
  private service: CursoModalidadService, private modalidadService: ModalidadService,
  private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoModalidadForm = this.formBuilder.group({
      id: ['', Validators.required],
      curso_id: ['', Validators.required],
      modalidad_id: ['', Validators.required],
 
    })

    if (this.editarCursoModalidad) {
      this.cursoModalidadForm.controls["id"].setValue(this.editarCursoModalidad.id)
      this.cursoModalidadForm.controls["curso_id"].setValue(this.editarCursoModalidad.curso_id)
      this.cursoModalidadForm.controls["modalidad_id"].setValue(this.editarCursoModalidad.modalidad_id)
    
    }

    this.modalidadService.mostrarModalidades().subscribe(respuesta => {
      this.modalidades = respuesta
    })

    this.cursoService.mostrarCursos().subscribe(respuesta => {
      this.cursos = respuesta
    })

  }

  actualizarCursoModalidad(){
    if(this.cursoModalidadForm.valid){
    this.service.actualizarCursoModalidad(this.cursoModalidadForm.value.id,this.cursoModalidadForm.value)
    .subscribe(respuesta => {
      this.dialog.closeAll()
      this.dialog.open(CursosModalidadesEditarExitosoComponent)
    }, error =>{
      this.dialog.closeAll()
      this.dialog.open(CursosEditarErrorComponent)
    })
  }
  }

}
