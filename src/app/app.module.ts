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
    ModalidadesEliminarErrorComponent
   
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
    MatCardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
