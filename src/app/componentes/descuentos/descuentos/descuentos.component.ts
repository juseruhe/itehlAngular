import { Component, OnInit,ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Descuento} from 'src/app/models/Descuento'
import {DescuentoService} from 'src/app/servicios/descuento.service'
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DescuentosCrearComponent } from '../descuentos-crear/descuentos-crear.component';

const DATA: Descuento[] = [];

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent implements OnInit {
  descuentos: any
  subscription: Subscription

  constructor(private service: DescuentoService, private route: Router,
    private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.mostrarDescuentos().subscribe(respuesta => {
      console.log(respuesta)
      this.dataSource.data = respuesta
    })

    this.subscription = this.service.getRefresh().subscribe(() =>{
      this.service.mostrarDescuentos().subscribe(respuesta =>{
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
    displayedColumns: string[] = ['posicion', 'nombre','curso','modalidad','descuento','pais','id'];
    dataSource = new MatTableDataSource<Descuento>([]);
  
    // Filtro
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // Modal para insertar descuento
    crearDescuento(){
      this.dialog.open(DescuentosCrearComponent)
    }

}
