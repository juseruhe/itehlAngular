import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { Subscription } from 'rxjs';
import { CursoService } from 'src/app/servicios/curso.service';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {CursosCrearComponent} from 'src/app/componentes/cursos/cursos-crear/cursos-crear.component'


const DATA: Curso[] = [];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements AfterViewInit, OnInit {
  cursos: any
  subscription: Subscription

  constructor(private service: CursoService, private route: Router,
    private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.mostrarCursos().subscribe(respuesta => {
      console.log(respuesta)
      this.dataSource.data = respuesta
    })

    this.subscription = this.service.getRefresh().subscribe(() =>{
      this.service.mostrarCursos().subscribe(respuesta =>{
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
  displayedColumns: string[] = ['posicion', 'nombre','costo','descripcion','dirigido_a','modalidad', 'id'];
  dataSource = new MatTableDataSource<Curso>([]);

  // Filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // llamar el modal insertar curso
  formularioCurso(){
    this.dialog.open(CursosCrearComponent)
  }
}
