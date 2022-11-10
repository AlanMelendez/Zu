import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'app', component: AppComponent
  },
  {
    path: 'inicio', loadChildren: () => import ('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: '**', redirectTo: 'index'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
