import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  declarations: [
    ClienteComponent,
    ListaComponent,
    NuevoComponent
  ],
  imports: [
  CommonModule,
  FormsModule
  ],
  exports:[
    ClienteComponent
  ]
})
export class ClientesModule { }
