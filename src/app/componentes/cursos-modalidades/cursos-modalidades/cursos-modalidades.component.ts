import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CursoModalidad } from 'src/app/models/CursoModalidad'
import { Subscription } from 'rxjs';
import { CursoModalidadService } from 'src/app/servicios/curso-modalidad.service';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CursosModalidadesCrearComponent } from '../cursos-modalidades-crear/cursos-modalidades-crear.component';
import { CursosModalidadesMostrarComponent } from 'src/app/componentes/cursos-modalidades/cursos-modalidades-mostrar/cursos-modalidades-mostrar.component'
import { filter } from 'rxjs/operators';
import { CursosModalidadesEditarComponent } from '../cursos-modalidades-editar/cursos-modalidades-editar.component';
import { CursosModalidadesEliminarComponent } from '../cursos-modalidades-eliminar/cursos-modalidades-eliminar.component';

const DATA: CursoModalidad[] = [];

@Component({
  selector: 'app-cursos-modalidades',
  templateUrl: './cursos-modalidades.component.html',
  styleUrls: ['./cursos-modalidades.component.css']
})
export class CursosModalidadesComponent implements AfterViewInit, OnInit {
  cursosModalidades: any
  subscription: Subscription

  constructor(private service: CursoModalidadService, private route: Router,
    private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.mostrarCursosModalidades().subscribe(respuesta => {
       console.log(respuesta)
      this.dataSource.data = respuesta
    })

    this.subscription = this.service.getRefresh().subscribe(() => {
      this.service.mostrarCursosModalidades().subscribe(respuesta => {
        console.log(respuesta)
        this.dataSource.data = respuesta
        console.log(this.dataSource.data)
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
  displayedColumns: string[] = ['posicion', 'curso_id', 'modalidad_id', 'id'];
  dataSource = new MatTableDataSource<CursoModalidad>([]);

  // Filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Llamar al modal de insertar curso/modalidad
  crearCursoModalidad() {
    this.dialog.open(CursosModalidadesCrearComponent)
  }

  // Llamar al modal de mostrar curso/modalidad
  mostrarCursoModalidad(element: any) {
    this.dialog.open(CursosModalidadesMostrarComponent, { data: element })
  }

  // Llamar al modal de editar curso/modalidad
  editarCursoModalidad(element: any){
    this.dialog.open(CursosModalidadesEditarComponent,{data: element})
  }

  // Llamar al modal eliminar curso/modalidad
  eliminarCursoModalidad(element:any){
    this.dialog.open(CursosModalidadesEliminarComponent,{data: element})
  }

}
