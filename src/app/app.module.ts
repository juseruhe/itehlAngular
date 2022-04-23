import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaisesComponent } from './componentes/paises/paises.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { PaisesCrearComponent } from './componentes/paises-crear/paises-crear.component';
import { PaisesCrearExitosoComponent } from './componentes/paises-crear-exitoso/paises-crear-exitoso.component';
import { PaisesCrearErrorComponent } from './componentes/paises-crear-error/paises-crear-error.component';
import { PaisesMostrarComponent } from './componentes/paises-mostrar/paises-mostrar.component';
import {MatCardModule} from '@angular/material/card';
import { PaisesEditarComponent } from './componentes/paises-editar/paises-editar.component';
import { PaisesEditarExitosoComponent } from './componentes/paises-editar-exitoso/paises-editar-exitoso.component';
import { PaisesEditarErrorComponent } from './componentes/paises-editar-error/paises-editar-error.component';
import { PaisesEliminarComponent } from './componentes/paises-eliminar/paises-eliminar.component';
import { PaisesEliminarExitosoComponent } from './componentes/paises-eliminar-exitoso/paises-eliminar-exitoso.component';
import { PaisesEliminarErrorComponent } from './componentes/paises-eliminar-error/paises-eliminar-error.component';
import { ModalidadesComponent } from './componentes/modalidades/modalidades/modalidades.component';
import { ModalidadesCrearComponent } from './componentes/modalidades/modalidades-crear/modalidades-crear.component';
import { ModalidadesCrearExitosoComponent } from './componentes/modalidades/modalidades-crear-exitoso/modalidades-crear-exitoso.component';
import { ModalidadesCrearErrorComponent } from './componentes/modalidades/modalidades-crear-error/modalidades-crear-error.component';
import { ModalidadesMostrarComponent } from './componentes/modalidades/modalidades-mostrar/modalidades-mostrar.component';
import { ModalidadesEditarComponent } from './componentes/modalidades/modalidades-editar/modalidades-editar.component';
import { ModalidadesEditarExitosoComponent } from './componentes/modalidades/modalidades-editar-exitoso/modalidades-editar-exitoso.component';
import { ModalidadesEditarErrorComponent } from './componentes/modalidades/modalidades-editar-error/modalidades-editar-error.component';
import { ModalidadesEliminarComponent } from './componentes/modalidades/modalidades-eliminar/modalidades-eliminar.component';
import { ModalidadesEliminarExitosoComponent } from './componentes/modalidades/modalidades-eliminar-exitoso/modalidades-eliminar-exitoso.component';
import { ModalidadesEliminarErrorComponent } from './componentes/modalidades/modalidades-eliminar-error/modalidades-eliminar-error.component';
import { CursosComponent } from './componentes/cursos/cursos/cursos.component';
import { CursosCrearComponent } from './componentes/cursos/cursos-crear/cursos-crear.component';
import {MatSelectModule} from '@angular/material/select';
import { CursosCrearExitosoComponent } from './componentes/cursos/cursos-crear-exitoso/cursos-crear-exitoso.component';
import { CursosCrearErrorComponent } from './componentes/cursos/cursos-crear-error/cursos-crear-error.component';
import { CursosMostrarComponent } from './componentes/cursos/cursos-mostrar/cursos-mostrar.component';
import { CursosEditarComponent } from './componentes/cursos/cursos-editar/cursos-editar.component';
import { CursosEditarExitosoComponent } from './componentes/cursos/cursos-editar-exitoso/cursos-editar-exitoso.component';
import { CursosEditarErrorComponent } from './componentes/cursos/cursos-editar-error/cursos-editar-error.component';
import { CursosEliminarComponent } from './componentes/cursos/cursos-eliminar/cursos-eliminar.component';
import { CursosEliminarExitosoComponent } from './componentes/cursos/cursos-eliminar-exitoso/cursos-eliminar-exitoso.component';
import { CursosEliminarErrorComponent } from './componentes/cursos/cursos-eliminar-error/cursos-eliminar-error.component';
import { DescuentosComponent } from './componentes/descuentos/descuentos/descuentos.component';
import { DescuentosCrearComponent } from './componentes/descuentos/descuentos-crear/descuentos-crear.component';
import { DescuentosCrearExitosoComponent } from './componentes/descuentos/descuentos-crear-exitoso/descuentos-crear-exitoso.component';
import { DescuentosCrearErrorComponent } from './componentes/descuentos/descuentos-crear-error/descuentos-crear-error.component';
import { DescuentosMostrarComponent } from './componentes/descuentos/descuentos-mostrar/descuentos-mostrar.component';
import { DescuentosEditarComponent } from './componentes/descuentos/descuentos-editar/descuentos-editar.component';
import { DescuentosEditarExitosoComponent } from './componentes/descuentos/descuentos-editar-exitoso/descuentos-editar-exitoso.component';
import { DescuentosEditarErrorComponent } from './componentes/descuentos/descuentos-editar-error/descuentos-editar-error.component';
import { DescuentosEliminarComponent } from './componentes/descuentos/descuentos-eliminar/descuentos-eliminar.component';
import { DescuentosEliminarExitosoComponent } from './componentes/descuentos/descuentos-eliminar-exitoso/descuentos-eliminar-exitoso.component';
import { DescuentosEliminarErrorComponent } from './componentes/descuentos/descuentos-eliminar-error/descuentos-eliminar-error.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CursosModalidadesComponent } from './componentes/cursos-modalidades/cursos-modalidades/cursos-modalidades.component';
import { CursosModalidadesCrearComponent } from './componentes/cursos-modalidades/cursos-modalidades-crear/cursos-modalidades-crear.component';
import { CursosModalidadesCrearExitosoComponent } from './componentes/cursos-modalidades/cursos-modalidades-crear-exitoso/cursos-modalidades-crear-exitoso.component';
import { CursosModalidadesCrearErrorComponent } from './componentes/cursos-modalidades/cursos-modalidades-crear-error/cursos-modalidades-crear-error.component';
import { CursosModalidadesMostrarComponent } from './componentes/cursos-modalidades/cursos-modalidades-mostrar/cursos-modalidades-mostrar.component';
import { CursosModalidadesEditarComponent } from './componentes/cursos-modalidades/cursos-modalidades-editar/cursos-modalidades-editar.component';
import { CursosModalidadesEditarExitosoComponent } from './componentes/cursos-modalidades/cursos-modalidades-editar-exitoso/cursos-modalidades-editar-exitoso.component';
import { CursosModalidadesEditarErrorComponent } from './componentes/cursos-modalidades/cursos-modalidades-editar-error/cursos-modalidades-editar-error.component';
import { CursosModalidadesEliminarComponent } from './componentes/cursos-modalidades/cursos-modalidades-eliminar/cursos-modalidades-eliminar.component';
import { CursosModalidadesEliminarExitosoComponent } from './componentes/cursos-modalidades/cursos-modalidades-eliminar-exitoso/cursos-modalidades-eliminar-exitoso.component';
import { CursosModalidadesEliminarErrorComponent } from './componentes/cursos-modalidades/cursos-modalidades-eliminar-error/cursos-modalidades-eliminar-error.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    PaisesCrearComponent,
    PaisesCrearExitosoComponent,
    PaisesCrearErrorComponent,
    PaisesMostrarComponent,
    PaisesEditarComponent,
    PaisesEditarExitosoComponent,
    PaisesEditarErrorComponent,
    PaisesEliminarComponent,
    PaisesEliminarExitosoComponent,
    PaisesEliminarErrorComponent,
    ModalidadesComponent,
    ModalidadesCrearComponent,
    ModalidadesCrearExitosoComponent,
    ModalidadesCrearErrorComponent,
    ModalidadesMostrarComponent,
    ModalidadesEditarComponent,
    ModalidadesEditarExitosoComponent,
    ModalidadesEditarErrorComponent,
    ModalidadesEliminarComponent,
    ModalidadesEliminarExitosoComponent,
    ModalidadesEliminarErrorComponent,
    CursosComponent,
    CursosCrearComponent,
    CursosCrearExitosoComponent,
    CursosCrearErrorComponent,
    CursosMostrarComponent,
    CursosEditarComponent,
    CursosEditarExitosoComponent,
    CursosEditarErrorComponent,
    CursosEliminarComponent,
    CursosEliminarExitosoComponent,
    CursosEliminarErrorComponent,
    DescuentosComponent,
    DescuentosCrearComponent,
    DescuentosCrearExitosoComponent,
    DescuentosCrearErrorComponent,
    DescuentosMostrarComponent,
    DescuentosEditarComponent,
    DescuentosEditarExitosoComponent,
    DescuentosEditarErrorComponent,
    DescuentosEliminarComponent,
    DescuentosEliminarExitosoComponent,
    DescuentosEliminarErrorComponent,
    CursosModalidadesComponent,
    CursosModalidadesCrearComponent,
    CursosModalidadesCrearExitosoComponent,
    CursosModalidadesCrearErrorComponent,
    CursosModalidadesMostrarComponent,
    CursosModalidadesEditarComponent,
    CursosModalidadesEditarExitosoComponent,
    CursosModalidadesEditarErrorComponent,
    CursosModalidadesEliminarComponent,
    CursosModalidadesEliminarExitosoComponent,
    CursosModalidadesEliminarErrorComponent,
    NavbarComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
