import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Descuento } from '../models/Descuento';


@Injectable({
  providedIn: 'root'
})
export class DescuentoService {
  url = "http://localhost:8080/itehl/descuentos";

  private refresh = new Subject<void>()

  constructor(private http: HttpClient) { }

  getRefresh() {
    return this.refresh
  }

  mostrarDescuentos(): Observable<Descuento[]>{
    return this.http.get<Descuento[]>(this.url)
 }

 insertarDescuento(descuento: any){
   return this.http.post(this.url,descuento)
   .pipe(
     tap(()=>{
       this.refresh.next()
     })
   )
 }

 actualizarDescuento(id:any,descuento:any){
   return this.http.put(this.url+"/"+id,descuento)
   .pipe(
     tap(()=>{
       this.refresh.next()
     })
   )
 }

 eliminarDescuento(id:any){
   return this.http.delete(this.url+"/"+id)
   .pipe(
     tap(()=>{
       this.refresh.next()
     })
   )
 }
}
