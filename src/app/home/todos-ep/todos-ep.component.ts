import { Episodio } from './../../interface/episodio.module';
import { EpisodioServiceService } from './../../services/episodio-service.service';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todos-ep',
  templateUrl: './todos-ep.component.html',
  styleUrls: ['./todos-ep.component.css']
})
export class TodosEpComponent implements OnInit, OnChanges {

  @Output() trocandoPlayer = new EventEmitter();
  episodios: Episodio[] = [];
  episodioId = 0;
  @Input() player = false;

  constructor(private episodiosService: EpisodioServiceService) { }

  ngOnInit(): void {
    this.episodios = this.episodiosService.getEpisodios();
    this.episodios = this.episodios.slice(0,6);
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.player){
      if(this.player == false){
        for(let i in this.episodios){
          this.episodios[i].player = 'play_arrow'
        }
      }
    }
  }

  mudaControle(id: number){
    this.episodioId = id;
    this.episodiosService.setDetalhes(this.episodioId);
    for(let i in this.episodios){
      if(this.episodioId === this.episodios[i].id){
        if(this.episodios[i].player === 'play_arrow'){
          this.episodios[i].player = 'pause';
          this.trocandoPlayer.emit(true);
        }else{
          this.episodios[i].player='play_arrow';
        }

      }else{
        this.episodios[i].player='play_arrow';
      }
    }
  }

}
