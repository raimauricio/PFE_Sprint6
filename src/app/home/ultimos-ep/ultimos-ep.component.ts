import { EpisodioServiceService } from './../../services/episodio-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Episodio } from 'src/app/interface/episodio.module';

@Component({
  selector: 'app-ultimos-ep',
  templateUrl: './ultimos-ep.component.html',
  styleUrls: ['./ultimos-ep.component.css']
})
export class UltimosEpComponent implements OnInit {

  ultimosEp: Episodio [] = []
  @Output() trocandoPlayer = new EventEmitter();
  operador = 'play_arrow';
  episodioId!: number;

  constructor(private episodiosService: EpisodioServiceService) { }

  ngOnInit(): void {
    this.ultimosEp = this.episodiosService.getEpisodios();
    this.ultimosEp = this.ultimosEp.slice(6,8);
  }

  mudaControle(id: number){
    this.episodioId = id;
    this.episodiosService.setDetalhes(this.episodioId);
    this.trocandoPlayer.emit(true);
  }


}
