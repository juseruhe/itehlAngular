import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './componentes/paises/paises.component';

const routes: Routes = [
  {path:'paises',component:PaisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
