import { EpisodioServiceService } from './../../services/episodio-service.service';
import { Component, EventEmitter, OnInit, Output, OnChanges } from '@angular/core';
import { Episodio } from 'src/app/interface/episodio.module';

@Component({
  selector: 'app-detalhes-ep',
  templateUrl: './detalhes-ep.component.html',
  styleUrls: ['./detalhes-ep.component.css']
})

export class DetalhesEpComponent implements OnInit{

  episodios: Episodio[] = []
  @Output() voltando = new EventEmitter();
  episodioDetalhe!: Episodio;
  episodioId!: number;

  constructor(private episodioService: EpisodioServiceService) {

  }

  ngOnInit(): void {
      this.episodios = this.episodioService.getEpisodios()
      this.episodioDetalhe = this.episodioService.getEpisodioDetalhes()
      EpisodioServiceService
        .emitirDetalhes
        .subscribe(episodio => this.episodioDetalhe = episodio)
  }

  voltandoUltimosEp(){
    this.voltando.emit(false);
  }

}
