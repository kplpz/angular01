import { Component } from '@angular/core';
import { ICliente } from './interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent{
  listaClientesP:ICliente[] = [
    {
      nombre:'Lola Cardozo',
      telefono:'7589-5865'
    },
    {
      nombre:'Astrid Diaz',
      telefono:'7589-7854'
    },
    {
      nombre:'Josue Merino',
      telefono:'7887-9656'
    }
  ];
  nuevoCliente:ICliente={
    nombre:'',
    telefono:''
  }

  // agregar():void{
  //   if(this.nuevoCliente.nombre.trim().length==0 || this.nuevoCliente.telefono.trim().length==0 ){
  //         return;
  //   }
  //     this.listaClientesP.push(this.nuevoCliente);
  //         console.log(this.listaClientesP);
  //         this.nuevoCliente={
  //           nombre:'',
  //           telefono: ''
  //         }
  // }
}
