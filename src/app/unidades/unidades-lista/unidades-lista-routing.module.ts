import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadesListaPage } from './unidades-lista.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadesListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadesListaPageRoutingModule {}
