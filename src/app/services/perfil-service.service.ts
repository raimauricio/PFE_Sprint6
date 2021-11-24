import { Injectable } from '@angular/core';
import { Perfil } from './../interface/perfil.module';

@Injectable({
  providedIn: 'root'
})
export class PerfilServiceService {

  nickname = '';
  perfis: Perfil[] = [];

  constructor() { }

  getPerfis(){

    return this.perfis;

  }

  setPerfis(perfil: Perfil){
    this.perfis.push(perfil);
  }

  usuarioLogado(){

    let nick = this.nickname.split('@',1);

    return String(nick);

  }
}
