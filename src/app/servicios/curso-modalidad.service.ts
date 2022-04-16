import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CursoModalidad } from '../models/CursoModalidad';

@Injectable({
  providedIn: 'root'
})
export class CursoModalidadService {

  url = "http://localhost:8080/itehl/cursos_modalidades";

  private refresh = new Subject<void>()

  constructor(private http: HttpClient) { }

  getRefresh() {
    return this.refresh
  }

  mostrarCursosModalidades(): Observable<CursoModalidad[]> {
    return this.http.get<CursoModalidad[]>(this.url)
  }

  insertarCursoModalidad(cursoModalidad: any) {
    return this.http.post(this.url, cursoModalidad)
      .pipe(
        tap(() => {
          this.refresh.next();
        })
      )
  }

  actualizarCursoModalidad(id:any,cursoModalidad:any){
    return this.http.put(this.url+"/"+id,cursoModalidad)
    .pipe(
      tap(()=>{
        this.refresh.next();
      })
    )
  }

  eliminarCursoModalidad(id:any){
    return this.http.delete(this.url+"/"+id)
    .pipe(
      tap(()=>{
        this.refresh.next()
      })
    )
  }

}
