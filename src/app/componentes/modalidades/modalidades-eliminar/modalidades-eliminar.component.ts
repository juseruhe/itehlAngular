import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalidadService } from 'src/app/servicios/modalidad.service';
import { ModalidadesEliminarExitosoComponent } from '../modalidades-eliminar-exitoso/modalidades-eliminar-exitoso.component';
import { ModalidadesEliminarErrorComponent } from '../modalidades-eliminar-error/modalidades-eliminar-error.component';

@Component({
  selector: 'app-modalidades-eliminar',
  templateUrl: './modalidades-eliminar.component.html',
  styleUrls: ['./modalidades-eliminar.component.css']
})
export class ModalidadesEliminarComponent implements OnInit {
  modalidadForm !: FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public eliminarModalidad: any,
  public dialog: MatDialog,private formBuilder:FormBuilder,
  private service: ModalidadService) { }

  ngOnInit(): void {
    this.modalidadForm = this.formBuilder.group({
      id: ['',Validators.required]
    })

    if(this.eliminarModalidad){
      this.modalidadForm.controls["id"].setValue(this.eliminarModalidad.id)
    }
  }

  
  borrarModalidad(){
    if(this.modalidadForm.valid){
      this.service.eliminarModalidad(this.modalidadForm.value.id)
      .subscribe(respuesta => {
        this.dialog.closeAll()
        this.dialog.open(ModalidadesEliminarExitosoComponent)
      }, error => {
        this.dialog.closeAll()
        console.log(error)
        this.dialog.open(ModalidadesEliminarErrorComponent,{data: error})
       
      })
    }
  }

}
