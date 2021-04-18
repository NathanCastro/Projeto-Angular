import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../.history/src/environments/environment_20210418163917';
import { Transacao } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL= environment.API_URL;

  constructor(
    private http:HttpClient,
  ) { }

  getTransacoes(){
    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`);    
  }
}
