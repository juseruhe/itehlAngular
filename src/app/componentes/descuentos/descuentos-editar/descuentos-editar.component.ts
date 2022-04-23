import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoModalidadService } from 'src/app/servicios/curso-modalidad.service';
import { DescuentoService } from 'src/app/servicios/descuento.service';
import { DatePipe } from '@angular/common';
import { DescuentosEditarExitosoComponent } from '../descuentos-editar-exitoso/descuentos-editar-exitoso.component';
import { DescuentosEditarErrorComponent } from '../descuentos-editar-error/descuentos-editar-error.component';
import { PaisServiceService } from 'src/app/servicios/pais-service.service';

@Component({
  selector: 'app-descuentos-editar',
  templateUrl: './descuentos-editar.component.html',
  styleUrls: ['./descuentos-editar.component.css']
})
export class DescuentosEditarComponent implements OnInit {
  descuentoForm !: FormGroup
  cursos_modalidades: any
  pipe = new DatePipe('en-US');
  paises: any

  constructor(@Inject(MAT_DIALOG_DATA) public editarDescuento: any,
    private dialog: MatDialog, private formBuilder: FormBuilder,
    private cursoModalidadservice: CursoModalidadService, private service: DescuentoService,
    private paisService: PaisServiceService) { }

  ngOnInit(): void {
    this.descuentoForm = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      curso_modalidad_id: ['', Validators.required],
      pais_id: ['', Validators.required],
      fecha_final: ['', Validators.required]

    })

    if (this.editarDescuento) {
      this.descuentoForm.controls["id"].setValue(this.editarDescuento.id)
      this.descuentoForm.controls["nombre"].setValue(this.editarDescuento.nombre)
      this.descuentoForm.controls["curso_modalidad_id"].setValue(this.editarDescuento.curso_modalidad_id)
      this.descuentoForm.controls["pais_id"].setValue(this.editarDescuento.pais_id)
      this.descuentoForm.controls["fecha_final"].setValue(this.pipe.transform(this.editarDescuento.fecha_final, 'yyyy-MM-dd'))

    }

    this.cursoModalidadservice.mostrarCursosModalidades().subscribe(respuesta => {
      this.cursos_modalidades = respuesta
    })

    this.paisService.mostrarPaises().subscribe(respuesta => {
      this.paises = respuesta
    })
  }

  actualizarDescuento() {
    if (this.descuentoForm.valid) {
      this.service.actualizarDescuento(this.descuentoForm.value.id, this.descuentoForm.value)
        .subscribe(respuesta => {
          this.dialog.closeAll()
          this.dialog.open(DescuentosEditarExitosoComponent)
        }, error => {
          this.dialog.closeAll()
          this.dialog.open(DescuentosEditarErrorComponent, { data: error })
        })
    }
  }

}
