import { Component, OnInit,Inject } from '@angular/core';
import { ModalidadService } from 'src/app/servicios/modalidad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/servicios/curso.service';
import { CursosEditarExitosoComponent } from '../cursos-editar-exitoso/cursos-editar-exitoso.component';
import { CursosEditarErrorComponent } from '../cursos-editar-error/cursos-editar-error.component';

@Component({
  selector: 'app-cursos-editar',
  templateUrl: './cursos-editar.component.html',
  styleUrls: ['./cursos-editar.component.css']
})
export class CursosEditarComponent implements OnInit {
  cursoForm !: FormGroup
  modalidades: any

  constructor(@Inject(MAT_DIALOG_DATA) public editarCurso: any,
  private dialog:MatDialog, private formBuilder:FormBuilder,
  private service: CursoService, private modalidadService: ModalidadService) { }

  ngOnInit(): void {
    this.cursoForm = this.formBuilder.group({
      id: ['',Validators.required],
      nombre: ['',Validators.required],
      costo: ['',Validators.required],
      descripcion: ['',Validators.required],
      dirigido_a: ['',Validators.required],
      modalidad_id: ['',Validators.required]
    })

   if(this.editarCurso){
     this.cursoForm.controls["id"].setValue(this.editarCurso.id)
     this.cursoForm.controls["nombre"].setValue(this.editarCurso.nombre)
     this.cursoForm.controls["costo"].setValue(this.editarCurso.costo)
     this.cursoForm.controls["descripcion"].setValue(this.editarCurso.descripcion)
     this.cursoForm.controls["dirigido_a"].setValue(this.editarCurso.dirigido_a)
     this.cursoForm.controls["modalidad_id"].setValue(this.editarCurso.modalidad.id)
   }

   this.modalidadService.mostrarModalidades().subscribe(respuesta => {
     this.modalidades = respuesta
   })
  }

  actualizarCurso(){ 
    if(this.cursoForm.valid){
      this.cursoForm.value.modalidad = {"id": this.cursoForm.value.modalidad_id}
    this.service.actualizarCurso(this.cursoForm.value.id,this.cursoForm.value)
    .subscribe(respuesta => {
      this.dialog.closeAll()
      this.dialog.open(CursosEditarExitosoComponent)
    },error => {
      this.dialog.closeAll()
      this.dialog.open(CursosEditarErrorComponent)
    })
  }
  }
}
