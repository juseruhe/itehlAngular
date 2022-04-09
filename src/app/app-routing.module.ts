import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './componentes/cursos/cursos/cursos.component';
import { DescuentosComponent } from './componentes/descuentos/descuentos/descuentos.component';
import { ModalidadesComponent } from './componentes/modalidades/modalidades/modalidades.component';
import { PaisesComponent } from './componentes/paises/paises.component';

const routes: Routes = [
  {path:'paises',component:PaisesComponent},
  {path:'modalidades',component:ModalidadesComponent},
  {path:'cursos',component:CursosComponent},
  {path:'descuentos',component:DescuentosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
