import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  constructor(private http:HttpClient) {
    
   }

   url= "http://localhost:8080/itehl/paises";
   paises:any

   mostrarPaises(): any{
   return this.http.get(this.url);
   }

}
