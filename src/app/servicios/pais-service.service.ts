import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from 'src/app/models/Pais'
import { Observable, Subject } from 'rxjs';
import { PaisInterface } from '../models/PaisInterface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {
  url = "http://localhost:8080/itehl/paises";

  private refresh = new Subject<void>()

  constructor(private http: HttpClient) {

  }


  paises: any

  getRefresh() {
    return this.refresh
  }

  mostrarPaises(): Observable<PaisInterface[]> {
    return this.http.get<PaisInterface[]>(this.url);
  }

  insertarPais(pais:any) {
    return this.http.post(this.url, pais)
      .pipe(
        tap(() => {
          this.refresh.next()
        })
      )
  }

  actualizarPais(id:any,pais:any){
    return this.http.put(this.url+"/"+id,pais)
    .pipe(
      tap(()=>{
        this.refresh.next()
      })
    )
  }

}