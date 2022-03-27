import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Pais} from 'src/app/models/Pais'

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {
  url= "http://localhost:8080/itehl/paises";

  constructor(private http:HttpClient) {
    
   }

  
   paises:any

   mostrarPaises(): any{
   return this.http.get(this.url);
   }

   insertarPais(pais:Pais) {
     return this.http.post(this.url,pais)
   }

}
