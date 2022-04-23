import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  paises(){
    this.ruta.navigateByUrl('/paises')
  }

  modalidades(){
    this.ruta.navigateByUrl('/modalidades')
  }

  cursos(){
    this.ruta.navigateByUrl('/cursos')
  }

  cursos_modalidades(){
    this.ruta.navigateByUrl('/cursos_modalidades')
  }

  descuentos(){
    this.ruta.navigateByUrl('/descuentos')
  }
}
