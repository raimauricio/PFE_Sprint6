import { PerfilServiceService } from './../services/perfil-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from '../interface/perfil.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  aceite = false;
  pass = 'visibility';
  typePass = 'password';
  email! : string
  senha!: string;
  perfis: Perfil[] = [];

  @Input() termos!: boolean;
  @Input() formButton = "";

  constructor(
    private perfilService: PerfilServiceService,
    private router: Router

    ) { }

  ngOnInit(): void {
    this.perfis = this.perfilService.getPerfis();
  }

  verSenha(){

    if(this.pass == 'visibility'){

      this.pass = 'visibility_off';
      this.typePass = 'text'

    }else{

      this.pass='visibility';
      this.typePass = 'password'

    }
  }

  executar(){

    if(this.formButton == 'Cadastre-se'){
      if(this.aceite){
        this.perfilService.perfis.push(
          {email: this.email, senha: this.senha}
        );
        alert('Usuario Cadastrado !');
        this.router.navigate(['/login'])
        this.email = "";
        this.senha = "";
      }else{
        alert('Aceite os termos para se cadastrar!');
      }

    }

    if(this.formButton == 'Entrar'){
      let logado = false;
      for(let i in this.perfis){
        if(this.email === this.perfis[i].email){
          if(this.senha === this.perfis[i].senha){
            this.router.navigate(['/home'])
            logado = true;
            this.perfilService.nickname = this.perfis[i].email;
          }
        }
      }
      if(!logado){
        alert('Falha na autenticação!');
      }

      this.email = "";
      this.senha = "";
    }
  }

}
