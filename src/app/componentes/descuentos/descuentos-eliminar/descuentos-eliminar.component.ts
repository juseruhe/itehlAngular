import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescuentoService } from 'src/app/servicios/descuento.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { DescuentosEliminarExitosoComponent } from '../descuentos-eliminar-exitoso/descuentos-eliminar-exitoso.component';
import { DescuentosEliminarErrorComponent } from '../descuentos-eliminar-error/descuentos-eliminar-error.component';

@Component({
  selector: 'app-descuentos-eliminar',
  templateUrl: './descuentos-eliminar.component.html',
  styleUrls: ['./descuentos-eliminar.component.css']
})
export class DescuentosEliminarComponent implements OnInit {
  descuentoForm !: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public eliminarDescuento: any,private service: DescuentoService,
  private  formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
   this.descuentoForm = this.formBuilder.group({
     id: ['', Validators.required]
   }) 

   if(this.descuentoForm){
    this.descuentoForm.controls["id"].setValue(this.eliminarDescuento.id)
   }
  }
  
  borrarDescuento(){
    this.service.eliminarDescuento(this.descuentoForm.value.id)
    .subscribe(respuesta => {
      this.dialog.closeAll()
      this.dialog.open(DescuentosEliminarExitosoComponent)
    }, error => {
      this.dialog.closeAll()
      this.dialog.open(DescuentosEliminarErrorComponent)
    })
  }

}
