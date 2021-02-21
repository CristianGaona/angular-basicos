import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

    // Personajes quemados
  private _personajes: Personaje[] = [{
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre: 'Vegueta',
    poder: 8500
  }
  ];


  get personajes(): Personaje[]{
      return [...this._personajes]; // Spread
  }


  constructor(){}
  
  agregarPersonaje( personaje: Personaje){
      this._personajes.push(personaje)
  }



}