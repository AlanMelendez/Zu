import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';


import { InicioRoutingModule } from './inicio-routing.module';
import { PreguntasComponent } from '../components/preguntas/preguntas.component';
import { InicioComponent } from './inicio.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { CardsComponent } from '../components/cards/cards.component';


@NgModule({
  declarations: [
    InicioComponent,
    PreguntasComponent,
    CardsComponent

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule

  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
