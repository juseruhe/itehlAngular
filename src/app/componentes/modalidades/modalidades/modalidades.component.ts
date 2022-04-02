import { AfterViewInit, Component, OnInit,ViewChild  } from '@angular/core';
import { Subscription } from 'rxjs';
import {Modalidad} from 'src/app/models/Modalidad';
import { ModalidadService } from 'src/app/servicios/modalidad.service';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import {ModalidadesCrearComponent} from 'src/app/componentes/modalidades/modalidades-crear/modalidades-crear.component';
import { ModalidadesMostrarComponent } from '../modalidades-mostrar/modalidades-mostrar.component';
import { ModalidadesEditarComponent } from '../modalidades-editar/modalidades-editar.component';
import { ModalidadesEliminarComponent } from '../../modalidades/modalidades-eliminar/modalidades-eliminar.component';

const DATA: Modalidad[] = [];

@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.component.html',
  styleUrls: ['./modalidades.component.css']
})

export class ModalidadesComponent implements AfterViewInit, OnInit {
  modalidades: any
  subscription: Subscription

  constructor(private service: ModalidadService, private route: Router,
    private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.mostrarModalidades().subscribe(respuesta => {

      console.log(respuesta)

      this.dataSource.data = respuesta

    })

    this.subscription = this.service.getRefresh().subscribe(() => {
      this.service.mostrarModalidades().subscribe(respuesta => {

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
  dataSource = new MatTableDataSource<Modalidad>([]);

  // Filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Llamar al formulario de Modalidades
  crearModalidad(){
    this.dialog.open(ModalidadesCrearComponent)
  }

  // Llamar al modal de mostrar modalidades
  mostrarModalidad(element: any){
    this.dialog.open(ModalidadesMostrarComponent,{data: element})
  }

  // Llamar al modal de editar
  editarModalidad(element: any){
    this.dialog.open(ModalidadesEditarComponent,{data: element})
  }

  // Llamar al modal de eliminar
  eliminarModalidad(element:any){
    this.dialog.open(ModalidadesEliminarComponent,{data: element})
  }

}
