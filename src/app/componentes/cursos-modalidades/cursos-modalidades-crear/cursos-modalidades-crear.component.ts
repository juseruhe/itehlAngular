import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CursoModalidadService } from 'src/app/servicios/curso-modalidad.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { ModalidadService } from 'src/app/servicios/modalidad.service';
import { CursosModalidadesCrearErrorComponent } from '../cursos-modalidades-crear-error/cursos-modalidades-crear-error.component';
import { CursosModalidadesCrearExitosoComponent } from '../cursos-modalidades-crear-exitoso/cursos-modalidades-crear-exitoso.component';

@Component({
  selector: 'app-cursos-modalidades-crear',
  templateUrl: './cursos-modalidades-crear.component.html',
  styleUrls: ['./cursos-modalidades-crear.component.css']
})
export class CursosModalidadesCrearComponent implements OnInit {
  cursos: any
  modalidades: any
  
  cursoModalidadForm !: FormGroup

  constructor( public dialog: MatDialog, private cursoService: CursoService,
    private formBuilder: FormBuilder, private service: CursoModalidadService,
    private modalidadService: ModalidadService) { }

  ngOnInit(): void {
    this.cursoService.mostrarCursos().subscribe(respuesta =>{
      console.log(respuesta)
      this.cursos = respuesta
    })

    this.modalidadService.mostrarModalidades().subscribe(respuesta => {
      this.modalidades = respuesta
    })

    this.cursoModalidadForm = this.formBuilder.group({
      curso_id: ["",Validators.required],
      modalidad_id: ["",Validators.required]
    })
  }

  insertarCursoModalidad(){
    if(this.cursoModalidadForm.valid){
      this.cursoModalidadForm.value.curso = {id: this.cursoModalidadForm.value.curso_id}
      this.cursoModalidadForm.value.modalidad = {id: this.cursoModalidadForm.value.modalidad_id}
      this.service.insertarCursoModalidad(this.cursoModalidadForm.value)
      .subscribe(respuesta => {
        this.dialog.closeAll()
        this.dialog.open(CursosModalidadesCrearExitosoComponent)
      }, error =>{ 
        this.dialog.closeAll()
        this.dialog.open(CursosModalidadesCrearErrorComponent)
      })
    }
  }

}
