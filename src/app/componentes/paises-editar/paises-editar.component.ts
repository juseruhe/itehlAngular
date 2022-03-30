import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaisServiceService } from 'src/app/servicios/pais-service.service';
import { PaisesEditarErrorComponent } from '../paises-editar-error/paises-editar-error.component';
import { PaisesEditarExitosoComponent } from '../paises-editar-exitoso/paises-editar-exitoso.component';

@Component({
  selector: 'app-paises-editar',
  templateUrl: './paises-editar.component.html',
  styleUrls: ['./paises-editar.component.css']
})
export class PaisesEditarComponent implements OnInit {
  paisForm !: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public editarPais: any,
    private dialog:MatDialog, private formBuilder:FormBuilder,
    private service: PaisServiceService) { }

  ngOnInit(): void {
    this.paisForm = this.formBuilder.group({
      id: ['',Validators.required],
      nombre: ['',Validators.required]
    })

   if(this.editarPais){
     this.paisForm.controls["id"].setValue(this.editarPais.id)
     this.paisForm.controls["nombre"].setValue(this.editarPais.nombre)
   }
  }

  actualizarPais(){
    if(this.paisForm.valid){
      console.log(this.paisForm.value.id)
       this.service.actualizarPais(this.paisForm.value.id,this.paisForm.value)
       .subscribe(respuesta =>{
         console.log(respuesta)
         this.dialog.closeAll()
         this.dialog.open(PaisesEditarExitosoComponent)
       },error => {
         console.log(error.error)
         this.dialog.closeAll()
         this.dialog.open(PaisesEditarErrorComponent)
       })
    }
  }

}
