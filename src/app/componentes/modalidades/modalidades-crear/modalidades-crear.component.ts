import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalidadService } from 'src/app/servicios/modalidad.service';
import { ModalidadesCrearExitosoComponent } from '../modalidades-crear-exitoso/modalidades-crear-exitoso.component';
import { ModalidadesCrearErrorComponent } from '../modalidades-crear-error/modalidades-crear-error.component';

@Component({
  selector: 'app-modalidades-crear',
  templateUrl: './modalidades-crear.component.html',
  styleUrls: ['./modalidades-crear.component.css']
})
export class ModalidadesCrearComponent implements OnInit {
  modalidadForm !: FormGroup
  constructor(private service: ModalidadService, public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.modalidadForm = this.formBuilder.group({
      nombre: ["", Validators.required]
    })
  }

  insertarModalidad() {
    if(this.modalidadForm.valid){
      this.service.insertarModalidad(this.modalidadForm.value).subscribe(respuesta =>{
        this.dialog.closeAll()
        this.dialog.open(ModalidadesCrearExitosoComponent)
      },error=>{
       this.dialog.closeAll()
       this.dialog.open(ModalidadesCrearErrorComponent)
      })
    }
}
}
