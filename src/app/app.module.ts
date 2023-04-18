import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { AlumnoModule } from './alumno/alumno.module';


import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
//van los componentes
@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent
  ],
  //modulos a necesitar
  imports: [
    BrowserModule,
    AlumnoModule,
    ClientesModule
  ],
  //van los servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
