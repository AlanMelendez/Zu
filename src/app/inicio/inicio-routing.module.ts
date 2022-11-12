import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from '../components/preguntas/preguntas.component';
import { InicioComponent } from './inicio.component';
import { CardsComponent } from '../components/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bienvenida' , component: InicioComponent
      },
      {
        path: 'preguntas', component: PreguntasComponent
      },
      {
        path: 'parati', component: CardsComponent
      },
      {
        path: '**', redirectTo: 'bienvenida'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
