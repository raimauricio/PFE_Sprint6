import { PerfilServiceService } from './../../services/perfil-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  nickname = '';
  constructor(private pefilService: PerfilServiceService) { }

  ngOnInit(): void {
    this.nickname = this.pefilService.usuarioLogado();
  }

}
