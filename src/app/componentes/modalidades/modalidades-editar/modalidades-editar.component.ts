import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalidadService } from 'src/app/servicios/modalidad.service';
import { ModalidadesEditarExitosoComponent} from 'src/app/componentes/modalidades/modalidades-editar-exitoso/modalidades-editar-exitoso.component';
import {ModalidadesEditarErrorComponent} from 'src/app/componentes/modalidades/modalidades-editar-error/modalidades-editar-error.component';

@Component({
  selector: 'app-modalidades-editar',
  templateUrl: './modalidades-editar.component.html',
  styleUrls: ['./modalidades-editar.component.css']
})
export class ModalidadesEditarComponent implements OnInit {
 modalidadForm !: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public editarModalidad: any,
  private dialog:MatDialog,private formBuilder:FormBuilder,private service: ModalidadService) { }

  ngOnInit(): void {
    this.modalidadForm = this.formBuilder.group({
      id: ['',Validators.required],
      nombre: ['',Validators.required]
    })

   if(this.editarModalidad){
     this.modalidadForm.controls["id"].setValue(this.editarModalidad.id)
     this.modalidadForm.controls["nombre"].setValue(this.editarModalidad.nombre)
   }
  }

  actualizarModalidad(){
   if(this.modalidadForm.valid){
      this.service.actualizarModalidad(this.modalidadForm.value.id,this.modalidadForm.value)
      .subscribe(respuesta => {
        this.dialog.closeAll()
        this.dialog.open(ModalidadesEditarExitosoComponent)
      }, error =>{
       this.dialog.closeAll()
       this.dialog.open(ModalidadesEditarErrorComponent)
      })
    }  
  }

}
