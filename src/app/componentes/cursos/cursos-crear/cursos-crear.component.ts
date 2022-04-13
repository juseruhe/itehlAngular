import { Component, OnInit } from '@angular/core';
import { ModalidadService } from 'src/app/servicios/modalidad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CursoService } from 'src/app/servicios/curso.service';
import { CursosCrearExitosoComponent } from 'src/app/componentes/cursos/cursos-crear-exitoso/cursos-crear-exitoso.component'
import { CursosCrearErrorComponent } from 'src/app/componentes/cursos/cursos-crear-error/cursos-crear-error.component'

@Component({
  selector: 'app-cursos-crear',
  templateUrl: './cursos-crear.component.html',
  styleUrls: ['./cursos-crear.component.css']
})
export class CursosCrearComponent implements OnInit {
  modalidades: any
  cursoForm !: FormGroup


  constructor(private modalidadService: ModalidadService, public dialog: MatDialog,
    private formBuilder: FormBuilder, private service: CursoService) { }

  ngOnInit(): void {
    this.modalidadService.mostrarModalidades().subscribe(respuesta => {
      console.log(respuesta)
      this.modalidades = respuesta
    })

    this.cursoForm = this.formBuilder.group({
      nombre: ["", Validators.required],
      costo: ["", Validators.required],
      descripcion: ["", Validators.required],
      dirigido_a: ["", Validators.required]
    })
  }

  insertarCurso() {
    if (this.cursoForm.valid) {
      this.service.insertarCurso(this.cursoForm.value).subscribe(respuesta => {
        this.dialog.closeAll()
        this.dialog.open(CursosCrearExitosoComponent)
      }, error => {
        this.dialog.closeAll()
        this.dialog.open(CursosCrearErrorComponent)
      })
    }
  }


}
