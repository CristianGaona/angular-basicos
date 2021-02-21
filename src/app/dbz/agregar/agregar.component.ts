import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // dentro del input puede ir un alias para representar el arreglo personajes
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dbzService: DbzService){

  }

  // Emiter eventos
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    // Detectar caracteres vacios
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo)
    //this.onNuevoPersonaje.emit( this.nuevo) // emitir evento cuando llama al método
    this.nuevo = { 
      nombre: '', 
      poder: 0 
    }; // Limpiar valores del formulario
  }


}
