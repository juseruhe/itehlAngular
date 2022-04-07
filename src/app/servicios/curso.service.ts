import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = "http://localhost:8080/itehl/cursos";

  private refresh = new Subject<void>()

  constructor(private http: HttpClient) { }

  getRefresh() {
    return this.refresh
  }

  mostrarCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url)
 }

 insertarCurso(curso: any) {
  return this.http.post(this.url,curso)
    .pipe(
      tap(() => {
        this.refresh.next()
      })
    )
}

actualizarCurso(id:any,curso: any){
  return this.http.put(this.url+"/"+id,curso)
  .pipe(
    tap(() => {
      this.refresh.next();
    })
  )
}

eliminarCurso(id:any){
  return this.http.delete(this.url+"/"+id)
  .pipe(
    tap(()=>{
      this.refresh.next();
    })
  )
}

}
