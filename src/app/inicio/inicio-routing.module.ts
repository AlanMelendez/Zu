import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreguntasComponent } from '../components/preguntas/preguntas.component';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio' , component: InicioComponent
      },
      {
        path: 'preguntas', component: PreguntasComponent
      },
      {
        path: '**', redirectTo: 'inicio'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
