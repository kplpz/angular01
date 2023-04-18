import { Component } from "@angular/core";

@Component({
  selector: 'app-alumno',
  templateUrl: 'alumno.component.html'
})
export class AlumnoComponent{
  nombre:string = "Lola";
  edad:number = 28;
  mostrarInfo():string{
    return this.nombre + " "+ this.edad;
  }

  get obtenerCapitalizado(){
    return this.nombre.toLocaleUpperCase();
  }

  cambiarDatos():void{
    this.nombre = 'Lola Blur';
    this.edad = 35;
  }
}
