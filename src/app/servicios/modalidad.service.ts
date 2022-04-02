import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Modalidad } from '../models/Modalidad';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  url = "http://localhost:8080/itehl/modalidades";

  private refresh = new Subject<void>()

  constructor(private http: HttpClient) { }

  getRefresh() {
    return this.refresh
  }

  mostrarModalidades(): Observable<Modalidad[]>{
     return this.http.get<Modalidad[]>(this.url)
  }

  insertarModalidad(modalidad: any) {
    return this.http.post(this.url, modalidad)
      .pipe(
        tap(() => {
          this.refresh.next()
        })
      )
  }

  actualizarModalidad(id:any,modalidad:any){
    return this.http.put(this.url+"/"+id,modalidad)
    .pipe(
      tap(() => {
        this.refresh.next()
      })
    )
  }

  eliminarModalidad(id:any){
    return this.http.delete(this.url+"/"+id)
    .pipe(
      tap(()=>{
        this.refresh.next()
      })
    )
  }
}
