import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadesListaPageRoutingModule } from './unidades-lista-routing.module';

import { UnidadesListaPage } from './unidades-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadesListaPageRoutingModule
  ],
  declarations: [UnidadesListaPage]
})
export class UnidadesListaPageModule {}
