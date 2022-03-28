import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import{ Pais } from 'src/app/models/Pais';
import { PaisServiceService } from 'src/app/servicios/pais-service.service';

@Component({
  selector: 'app-paises-crear',
  templateUrl: './paises-crear.component.html',
  styleUrls: ['./paises-crear.component.css']
})
export class PaisesCrearComponent implements OnInit {
  pais:Pais = new Pais()

  constructor(private service:PaisServiceService,public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  insertarPais(){
    console.log(this.pais)
   this.service.insertarPais(this.pais).subscribe(data =>{
      console.log(data)
      
    },error=>{
      console.log(error)
     this.dialog.closeAll()
    })
  }

}
