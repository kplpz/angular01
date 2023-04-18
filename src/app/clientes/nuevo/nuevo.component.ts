import { Component, Input } from '@angular/core';
import { ICliente } from '../cliente/interfaces/cliente.interface';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  @Input()
  listaClientes: ICliente[] = [];


  nuevoCliente: ICliente = {
    nombre: '',
    telefono: ''
  }

  agregar(): void {
    if (this.nuevoCliente.nombre.trim().length == 0 || this.nuevoCliente.telefono.trim().length == 0) {
      return;
    }
    this.listaClientes.push(this.nuevoCliente);
    console.log(this.listaClientes);
    this.nuevoCliente = {
      nombre: '',
      telefono: ''
    }
  }

}
