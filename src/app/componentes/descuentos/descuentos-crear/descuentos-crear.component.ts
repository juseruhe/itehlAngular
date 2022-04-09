import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CursoService } from 'src/app/servicios/curso.service';
import { DescuentoService } from 'src/app/servicios/descuento.service';
import { PaisServiceService } from 'src/app/servicios/pais-service.service';

@Component({
  selector: 'app-descuentos-crear',
  templateUrl: './descuentos-crear.component.html',
  styleUrls: ['./descuentos-crear.component.css']
})
export class DescuentosCrearComponent implements OnInit {
  cursos: any
  paises:any
  descuentoForm !: FormGroup

  constructor(private paisService: PaisServiceService, 
    public dialog: MatDialog, private cursoService: CursoService,
    private formBuilder: FormBuilder, private service: DescuentoService) { }

  ngOnInit(): void {
    this.cursoService.mostrarCursos().subscribe(respuesta =>{
      console.log(respuesta)
      this.cursos = respuesta
    })

    this.paisService.mostrarPaises().subscribe(respuesta => {
      this.paises = respuesta
    })

    this.descuentoForm = this.formBuilder.group({
      nombre: ["",Validators.required],
      curso_id: ["",Validators.required],
      descuento:["",Validators.required],
      pais_id: ["",Validators.required],
      fecha_final: ["",Validators.required]
    })
  }

  insertarDescuento(){

  }

}
