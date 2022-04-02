import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalidadesComponent } from './componentes/modalidades/modalidades/modalidades.component';
import { PaisesComponent } from './componentes/paises/paises.component';

const routes: Routes = [
  {path:'paises',component:PaisesComponent},
  {path:'modalidades',component:ModalidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
