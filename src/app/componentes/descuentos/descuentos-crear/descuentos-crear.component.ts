import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CursoService } from 'src/app/servicios/curso.service';
import { DescuentoService } from 'src/app/servicios/descuento.service';
import { PaisServiceService } from 'src/app/servicios/pais-service.service';
import {ModalidadService} from 'src/app/servicios/modalidad.service';
import { CursoModalidadService } from 'src/app/servicios/curso-modalidad.service';
import { DescuentosCrearExitosoComponent } from '../descuentos-crear-exitoso/descuentos-crear-exitoso.component';
import { DescuentosCrearErrorComponent } from '../descuentos-crear-error/descuentos-crear-error.component';


@Component({
  selector: 'app-descuentos-crear',
  templateUrl: './descuentos-crear.component.html',
  styleUrls: ['./descuentos-crear.component.css']
})
export class DescuentosCrearComponent implements OnInit {
  cursos_modalidades: any
  paises:any
  
  descuentoForm !: FormGroup

  constructor(private paisService: PaisServiceService, 
    public dialog: MatDialog, private cursoModalidadService: CursoModalidadService,
    private formBuilder: FormBuilder, private service: DescuentoService) { }

  ngOnInit(): void {
    this.cursoModalidadService.mostrarCursosModalidades().subscribe(respuesta =>{
      console.log(respuesta)
      this.cursos_modalidades = respuesta
    })

    this.paisService.mostrarPaises().subscribe(respuesta => {
      this.paises = respuesta
    })

    this.descuentoForm = this.formBuilder.group({
      nombre: ["",Validators.required],
      curso_modalidad_id: ["",Validators.required],
      pais_id: ["",Validators.required],
      fecha_final: ["",Validators.required]
    })
  }

  insertarDescuento(){
    if(this.descuentoForm.valid){

      this.service.insertarDescuento(this.descuentoForm.value)
      .subscribe(respuesta => {
        this.dialog.closeAll()
        this.dialog.open(DescuentosCrearExitosoComponent)
      },error => {
        this.dialog.closeAll()
        this.dialog.open(DescuentosCrearErrorComponent)
      })
    }

  }

  valorModalidad(e){
   alert(e)
  }

}
