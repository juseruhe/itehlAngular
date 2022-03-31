import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisServiceService } from 'src/app/servicios/pais-service.service';


@Component({
  selector: 'app-paises-eliminar',
  templateUrl: './paises-eliminar.component.html',
  styleUrls: ['./paises-eliminar.component.css']
})
export class PaisesEliminarComponent implements OnInit {
  paisForm !: FormGroup

  constructor(
  @Inject(MAT_DIALOG_DATA) public eliminarPais: any,
  public dialog: MatDialog,private formBuilder:FormBuilder,
  private service:PaisServiceService) { }

  ngOnInit(): void {
    console.log(this.eliminarPais)
    this.paisForm = this.formBuilder.group({
      id: ['',Validators.required]
    })

    if(this.eliminarPais){
      this.paisForm.controls["id"].setValue(this.eliminarPais.id)
    }
  
  }

  borrarPais(){
    if(this.paisForm.valid){
      this.service.eliminarPais(this.paisForm.value.id)
      .subscribe(respuesta => {
         alert("Eliminado correctamente")
      }, error => {
        alert(error.error.status+""+error.error.error)
        console.log(error)
      })
    }
  }

  
}
