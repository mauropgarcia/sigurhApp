import { ListaUnidadesService } from './../../services/lista-unidades.service';
import { IUnidadeApi, IListaUnidades } from './../../models/iUnidadesAPI.models';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidades-lista',
  templateUrl: './unidades-lista.page.html',
  styleUrls: ['./unidades-lista.page.scss'],
})
export class UnidadesListaPage implements OnInit {
  listaUnidades: IListaUnidades;
  constructor(public alertController: AlertController,
    public toastController: ToastController,
    public route: Router,
    public listaUnidadesService: ListaUnidadesService
  ) { }

  buscarUnidades(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim() !== '') {
       this.listaUnidadesService.buscarUnidades(busca).subscribe(dados=>{
         console.log(dados);
         this.listaUnidades = dados;
       })
    }
  }

  ngOnInit() {

       this.listaUnidadesService.buscarUnidades('').subscribe(dados=>{
         console.log(dados);
         this.listaUnidades = dados;
       })

  }

}
