import { IListaUnidades } from './../models/iUnidadesAPI.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaUnidadesService {
  private apiURL = 'https://sigurh.cps.sp.gov.br/dbservices/ListaUnidades.php';
  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarUnidades(busca: string): Observable<IListaUnidades> {
    const url = `${this.apiURL}?op=${busca}`;
    return this.http.get<IListaUnidades>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
   }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }

}
