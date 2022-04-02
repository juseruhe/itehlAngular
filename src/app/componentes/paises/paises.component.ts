import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaisServiceService } from 'src/app/servicios/pais-service.service';
import { PaisInterface } from 'src/app/models/PaisInterface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { PaisesCrearComponent } from 'src/app/componentes/paises-crear/paises-crear.component';
import { Subscription } from 'rxjs';
import  {PaisesMostrarComponent} from 'src/app/componentes/paises-mostrar/paises-mostrar.component';
import {PaisesEditarComponent} from 'src/app/componentes/paises-editar/paises-editar.component';
import { PaisesEliminarComponent } from '../paises-eliminar/paises-eliminar.component';

const DATA: PaisInterface[] = [];

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements AfterViewInit, OnInit {
  paises: any
  posicion: Number;
  subscription: Subscription

  constructor(private service: PaisServiceService, private route: Router,
    private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.service.mostrarPaises().subscribe(respuesta => {

      console.log(respuesta)

      this.dataSource.data = respuesta

    })

    this.subscription = this.service.getRefresh().subscribe(() => {
      this.service.mostrarPaises().subscribe(respuesta => {

        console.log(respuesta)

        this.dataSource.data = respuesta

      })
    })
  }

  // Clasificación
  @ViewChild(MatSort) sort: MatSort;


  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // Paginación
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // Datatable
  displayedColumns: string[] = ['posicion', 'nombre', 'id'];
  dataSource = new MatTableDataSource<PaisInterface>([]);

  // Filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // abrir modal de insertar país
  formularioPais() {
    this.dialog.open(PaisesCrearComponent)
  }

  //abrir modal de mostrar País
  mostrarPais(element: any){
    this.dialog.open(PaisesMostrarComponent,{data: element})
  }

 // abrir modal de editar
 editarPais(element: any){
   this.dialog.open(PaisesEditarComponent,{data: element})
 }

 // abrir modal de eliminar
eliminarPais(element: any){
  this.dialog.open(PaisesEliminarComponent,{data: element})
}



}










