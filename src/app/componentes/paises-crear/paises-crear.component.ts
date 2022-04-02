import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PaisServiceService } from 'src/app/servicios/pais-service.service';
import { PaisesCrearExitosoComponent } from 'src/app/componentes/paises-crear-exitoso/paises-crear-exitoso.component';
import { PaisesCrearErrorComponent } from 'src/app/componentes/paises-crear-error/paises-crear-error.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paises-crear',
  templateUrl: './paises-crear.component.html',
  styleUrls: ['./paises-crear.component.css']
})
export class PaisesCrearComponent implements OnInit {
  paisForm !: FormGroup

  constructor(private service: PaisServiceService, public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.paisForm = this.formBuilder.group({
      nombre: ["", Validators.required]
    })
  }

  insertarPais() {
   if(this.paisForm.valid){
     this.service.insertarPais(this.paisForm.value).subscribe(respuesta =>{
       this.dialog.closeAll()
       this.dialog.open(PaisesCrearExitosoComponent)
     },error=>{
      this.dialog.closeAll()
      this.dialog.open(PaisesCrearErrorComponent)
     })
   }
    
  }

}
