import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

// Módulo personalizado para relacionar varios componentes y despues este módulo enviarlo al app,module.ts
@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        // Aqui van solo módulos unicamente
        CommonModule // Ofrece ciertas directivas como *gFor and *ngIf
    ]
})
export class HeroesModule{}
